import test from 'node:test';
import assert from 'node:assert/strict';
import { createGraphicsContext, renderPixelRatio } from '../src/graphics-support.js';

test('Retina and 5K drawing buffers stay within the GPU pixel budget', () => {
  for (const [width, height, deviceRatio] of [[2560, 1440, 2], [5120, 2880, 1], [1440, 900, 2], [1920, 1080, 1]]) {
    for (const legacy of [true, false]) {
      const ratio = renderPixelRatio(width, height, deviceRatio, legacy);
      assert(ratio > 0 && ratio <= deviceRatio);
      assert(width * height * ratio ** 2 <= (legacy ? 1800000 : 4000000) + 1);
    }
  }
});

test('Safari 14 selects WebGL 1 when WebGL 2 is absent or throws', () => {
  for (const throws of [false, true]) {
    const requested = [], canvases = [];
    const context = {};
    const result = createGraphicsContext(() => {
      const canvas = { getContext(type, options) {
        requested.push(type);
        assert.equal(options.preserveDrawingBuffer, false);
        if (type === 'webgl2' && throws) throw new Error('Unavailable driver');
        return type === 'webgl' ? context : null;
      } };
      canvases.push(canvas);
      return canvas;
    });
    assert.deepEqual(requested, ['webgl2', 'webgl']);
    assert.equal(result.context, context);
    assert.equal(result.canvas, canvases[1]);
    assert.equal(result.legacy, true);
  }
});

test('graphics-disabled machines take the data-view path', () => {
  assert.equal(createGraphicsContext(() => ({ getContext: () => null })), null);
});
