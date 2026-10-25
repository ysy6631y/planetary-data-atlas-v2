// Reparent existing controls; keep their IDs, values, handlers and inspector views.
export function mountExhibitionUI() {
  const rail = document.createElement('div');
  rail.id = 'exhibition-rail';
  rail.innerHTML = `<section id="data-stream" aria-label="System data stream">
    <div class="stream-heading"><h2>DATA STREAM</h2><span id="stream-mode">AUTO</span></div>
    <div class="stream-key"><span>EVENT / SYSTEM ACTIVITY</span><span>TRACE / SOURCE READOUT</span></div>
    <div id="stream-lines" role="log" aria-live="off" aria-label="Recent system events and source readout"></div>
    <div class="stream-footer"><span id="stream-stage" role="status">INITIALIZING</span><span id="stream-count">0 RECORDS</span></div>
  </section>`;
  const panel = document.getElementById('local-field');
  const primary = panel.querySelector('.dataset-picker');
  const summary = panel.querySelector('.dataset-summary');
  panel.insertBefore(primary, document.getElementById('analysis-body'));
  panel.insertBefore(summary, document.getElementById('analysis-body'));
  panel.querySelector('.eyebrow').textContent = 'DATA SELECTION';
  rail.append(panel, document.getElementById('inspector'));
  document.getElementById('viewport').append(rail);
  document.getElementById('index-trigger').hidden = true;
  document.getElementById('boundaries').classList.add('open');
}
