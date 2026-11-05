// Do not steal numeric input from CSV rows, selects, or operator volume controls.
export function soundShortcut(event) {
  if (event.repeat || event.isComposing || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return null;
  const target = event.target;
  if (target?.isContentEditable || target?.closest?.('input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]), textarea, select, [role="combobox"], [role="slider"]')) return null;
  if (event.key === '1' || event.code === 'Numpad1') return 'ambient';
  if (event.key === '0' || event.code === 'Numpad0') return 'muted';
  return null;
}
