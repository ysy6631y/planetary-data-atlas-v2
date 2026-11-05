import test from 'node:test';
import assert from 'node:assert/strict';
import { soundShortcut } from '../src/sound-shortcuts.js';

test('operator digits and number pad work without taking modified shortcuts', () => {
  assert.equal(soundShortcut({ key: '1' }), 'ambient');
  assert.equal(soundShortcut({ key: 'End', code: 'Numpad1' }), 'ambient');
  assert.equal(soundShortcut({ key: '0' }), 'muted');
  assert.equal(soundShortcut({ key: 'Insert', code: 'Numpad0' }), 'muted');
  for (const flag of ['repeat', 'isComposing', 'ctrlKey', 'metaKey', 'altKey', 'shiftKey']) {
    assert.equal(soundShortcut({ key: '1', [flag]: true }), null, flag);
  }
});

test('operator digits preserve source-row editing, sliders, selects and editable text', () => {
  assert.equal(soundShortcut({ key: '1', target: { isContentEditable: true } }), null);
  assert.equal(soundShortcut({ key: '0', target: { closest: () => ({}) } }), null);
  assert.equal(soundShortcut({ key: '1', target: { closest: () => null } }), 'ambient');
});
