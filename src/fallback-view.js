import source from '../audit/planetary-boundaries.source.json';
import manifest from './atlas-manifest.generated.json';
import { parseData } from './data.js';
import { loadDataset } from './atlas-data.js';

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Keep real reference values and source records accessible without a GPU.
export function showDataView(reason) {
  const groups = parseData(source);
  document.body.classList.add('data-view');
  const main = document.querySelector('main');
  main.innerHTML = `<section class="data-view-content"><p role="status">${escape(reason)}</p>
    <button id="retry-graphics" type="button">3D 다시 시도</button>
    <div class="data-view-groups">${groups.map(group => `<section><h2>${escape(group.name)}</h2>
      ${group.controls.map(control => `<p><strong>${escape(control.raw.label || control.id)}</strong>
        <span>${control.r === null ? 'NOT QUANTIFIED' : 'R / ' + control.r.toFixed(4)}</span></p>`).join('')}
      <label>DATA <select data-boundary="${escape(group.id)}"><option value="">데이터 선택</option>${manifest.datasets.filter(meta => meta.boundaries.includes(group.id)).map(meta => `<option value="${escape(meta.id)}">${escape(meta.title)}</option>`).join('')}</select></label>
      <div class="data-view-records" aria-live="polite"></div></section>`).join('')}</div></section>`;
  document.getElementById('retry-graphics').onclick = () => location.reload();
  for (const select of main.querySelectorAll('select')) {
    let request = 0;
    select.onchange = async () => {
      const token = ++request;
      const output = select.closest('section').querySelector('.data-view-records');
      if (!select.value) { output.textContent = ''; return; }
      output.textContent = 'READING DATA…';
      try {
        const meta = manifest.datasets.find(item => item.id === select.value);
        const dataset = await loadDataset(meta);
        if (token !== request) return;
        const pageSize = 50;
        let page = 0;
        const render = () => {
          const start = page * pageSize;
          output.innerHTML = `<p>${dataset.records.length} ROWS · ${escape(dataset.source)}</p><div class="data-view-table"><table>
            <thead><tr>${meta.columns.map(column => `<th>${escape(column)}</th>`).join('')}</tr></thead>
            <tbody>${dataset.records.slice(start, start + pageSize).map(record => `<tr>${record.raw.map(value => `<td>${escape(value)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
            <div class="data-view-pages"><button data-page="-1" ${page === 0 ? 'disabled' : ''}>이전</button><span>${start + 1}–${Math.min(start + pageSize, dataset.records.length)} / ${dataset.records.length}</span><button data-page="1" ${start + pageSize >= dataset.records.length ? 'disabled' : ''}>다음</button></div>`;
          output.querySelectorAll('[data-page]').forEach(button => { button.onclick = () => { page += Number(button.dataset.page); render(); }; });
        };
        render();
      } catch { if (token === request) output.textContent = '데이터를 불러오지 못했습니다. 다시 선택해 주세요.'; }
    };
  }
}
