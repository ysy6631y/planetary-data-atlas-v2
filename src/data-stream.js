const MAX_LINES = 140;
const MAX_QUEUE = 180;
const TRACE_LIMIT = 72;

// EVENT reflects real application transitions. TRACE is a paced readout of real
// source records/display coordinates, not simulated processing or downloads.
export function createDataStream() {
  const host = document.getElementById('stream-lines');
  const stage = document.getElementById('stream-stage');
  const count = document.getElementById('stream-count');
  const queue = [];
  let frame = 0, previous = 0, sequence = 0, source = null, disposed = false;
  function pump(now) {
    frame = 0;
    if (disposed || !queue.length) return;
    if (now - previous >= 38) {
      previous = now;
      const item = queue.shift();
      const line = document.createElement('div');
      line.className = `stream-line ${item.kind.toLowerCase()}${item.important ? ' important' : ''}`;
      line.dataset.kind = item.kind;
      const number = document.createElement('span');
      number.className = 'stream-sequence'; number.textContent = String(++sequence).padStart(5, '0');
      const type = document.createElement('span'); type.className = 'stream-type'; type.textContent = item.kind;
      const message = document.createElement('span'); message.textContent = item.message;
      line.append(number, type, message); host.append(line);
      while (host.childElementCount > MAX_LINES) host.firstElementChild.remove();
      host.scrollTop = host.scrollHeight;
      count.textContent = `${host.childElementCount} / ${MAX_LINES} LINES`;
    }
    if (queue.length) frame = requestAnimationFrame(pump);
  }
  function add(message, { kind = 'EVENT', important = false } = {}) {
    if (disposed) return;
    if (queue.length >= MAX_QUEUE) {
      const trace = queue.findIndex(item => item.kind === 'TRACE');
      queue.splice(trace >= 0 ? trace : 0, 1);
    }
    queue.push({ message, kind, important });
    if (!frame) frame = requestAnimationFrame(pump);
  }
  function clearTrace() {
    for (let i = queue.length - 1; i >= 0; i--) if (queue[i].kind === 'TRACE') queue.splice(i, 1);
  }
  function process(event) {
    const labels = { READING: 'READING SOURCE RECORDS', PARSING: 'PARSING SOURCE RECORDS', RENDERING: 'UPDATING SPATIAL GEOMETRY', READY: 'SCENE READY', ERROR: 'SOURCE ERROR', 'NO LOCAL DATA': 'PLANETARY REFERENCE ONLY' };
    stage.textContent = labels[event.stage] || event.stage;
    add(`${labels[event.stage] || event.stage} / ${event.source}${event.rows != null ? ` / ${event.rows.toLocaleString('en')} ROWS` : ''}${event.error ? ` / ${event.error}` : ''}`, { important: event.stage === 'ERROR' || event.stage === 'READY' });
  }
  function dataset(data, positions) {
    clearTrace(); source = data.id;
    add(`MAPPING COORDINATES / ${data.axes.join(' / ') || 'SOURCE RECORDS / NO XYZ'}`);
    add(`RENDERING OBSERVATIONS / ${data.observations.length.toLocaleString('en')} POINTS / ${data.records.length.toLocaleString('en')} SOURCE ROWS`);
    for (const entry of data.sources) add(`SOURCE / ${entry.archive} / ${entry.path}`, { kind: 'TRACE' });
    const records = data.observations.length ? data.observations : data.records;
    for (let i = 0; i < Math.min(records.length, TRACE_LIMIT); i++) {
      const row = records[i];
      const values = positions[i]?.map(value => Number(value.toFixed(3))).join(' / ');
      const coordinates = values ? `DISPLAY XYZ ${values}` : row.plotted ? `SOURCE XYZ ${row.xyz.join(' / ')}` : 'SOURCE RECORD / NO SPATIAL COORDINATES';
      add(`ROW ${row.sourceRow} / ${row.code} / ${coordinates}`, { kind: 'TRACE' });
    }
    if (records.length > TRACE_LIMIT) add(`READOUT SAMPLE / FIRST ${TRACE_LIMIT} OF ${records.length.toLocaleString('en')} RECORDS / FULL SOURCE RETAINED`, { kind: 'TRACE' });
  }
  function exploration(state, metadata) {
    document.getElementById('stream-mode').textContent = state.mode;
    stage.textContent = state.stage;
    if (['MANUAL', 'SELECTING BOUNDARY', 'SELECTING DATASET', 'RETURNING TO PLANET'].includes(state.stage)) clearTrace();
    add(`${state.mode} / ${state.stage}${metadata.boundary ? ` / ${metadata.boundary}` : ''}${state.controlId ? ` / ${state.controlId}` : ''}${metadata.dataset ? ` / ${metadata.dataset}` : ''}`, { important: state.stage === 'SELECTING BOUNDARY' || state.stage === 'MANUAL' });
  }
  add('SYSTEM INITIALIZED / PLANETARY DATA ATLAS');
  return {
    add, process, dataset, exploration,
    selection(label, mode = 'MANUAL') { add(`${mode} / SELECTING ${label}`); },
    getSnapshot: () => ({ lines: host.childElementCount, queued: queue.length, maxLines: MAX_LINES, maxQueue: MAX_QUEUE, source, sequence }),
    dispose() { disposed = true; cancelAnimationFrame(frame); queue.length = 0; },
  };
}
