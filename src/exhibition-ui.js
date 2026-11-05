// Reparent existing controls; keep their IDs, values, handlers and inspector views.
export function mountExhibitionUI() {
  const rail = document.createElement('div');
  rail.id = 'exhibition-rail';
  rail.innerHTML = `<section id="data-stream" aria-label="System data stream">
    <div class="stream-window"><div id="stream-lines" role="log" aria-live="off" aria-label="Recent system events and source readout"></div></div>
    <span id="stream-mode" hidden>AUTO</span><span id="stream-stage" hidden>INITIALIZING</span><span id="stream-count" hidden>0 RECORDS</span>
  </section>`;
  const legend = document.querySelector('.legend');
  legend.setAttribute('aria-label', 'Color meanings: baseline, boundary, high risk');
  document.querySelector('.scene-bottom').append(legend);
  const panel = document.getElementById('local-field');
  const primary = panel.querySelector('.dataset-picker');
  const summary = panel.querySelector('.dataset-summary');
  panel.insertBefore(primary, document.getElementById('analysis-body'));
  panel.insertBefore(summary, document.getElementById('analysis-body'));
  panel.querySelector('.eyebrow').textContent = 'DATA SELECTION';
  const controls = document.createElement('div');
  controls.id = 'data-controls';
  controls.append(panel, document.getElementById('inspector'));
  rail.append(controls);
  document.getElementById('viewport').append(rail);
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.id = 'data-controls-toggle'; toggle.textContent = 'DATA';
  toggle.title = 'Open data selection and readout';
  toggle.setAttribute('aria-controls', 'data-controls'); toggle.setAttribute('aria-expanded', 'false');
  toggle.onclick = () => {
    const open = !document.body.classList.contains('data-controls-open');
    document.body.classList.toggle('data-controls-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  document.querySelector('.observation-toolbar').prepend(toggle);
  document.getElementById('index-trigger').hidden = true;
  document.getElementById('boundaries').classList.add('open');
}
