import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

// Keep the original measurement geometry for validation/picking. Render its
// exact path as screen-space triangles: native WebGL line width is often 1px.
export function createExhibitionLines(scene, antialias) {
  const entries = [];
  const sources = [];
  scene.traverse(object => { if (object.isLine) sources.push(object); });
  for (const source of sources) {
    const attribute = source.geometry.getAttribute('position');
    if (!attribute || attribute.count < 2) continue;
    const count = source.isLineSegments ? attribute.count / 2 : attribute.count - (source.isLineLoop ? 0 : 1);
    const positions = new Float32Array(count * 6);
    const geometry = new LineSegmentsGeometry().setPositions(positions);
    const material = new LineMaterial({
      color: source.material.color,
      linewidth: Math.max(1, (source.userData.strokeWidth || (source.isLineSegments ? 1.1 : 1.6)) * .7),
      transparent: true, opacity: source.material.opacity, depthWrite: false,
      alphaToCoverage: antialias,
    });
    // Three's antialiased endcaps otherwise reset alpha to 1 at every segment,
    // producing bright dotted joints on translucent red circles.
    material.onBeforeCompile = shader => {
      shader.fragmentShader = shader.fragmentShader.replace(
        'alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );',
        'alpha *= 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );',
      );
    };
    material.customProgramCacheKey = () => 'continuous-translucent-stroke';
    const stroke = new LineSegments2(geometry, material);
    stroke.frustumCulled = false;
    stroke.renderOrder = source.renderOrder;
    // r162 and the current engine differ in automatic resolution handling.
    stroke.onBeforeRender = () => {};
    source.add(stroke);
    source.material.visible = false;
    entries.push({ source, stroke, positions, count, version: -1, attribute: null });
  }
  return {
    resize(width, height) { for (const { stroke } of entries) stroke.material.resolution.set(width, height); },
    update() {
      for (const entry of entries) {
        const { source, stroke } = entry;
        stroke.material.color.copy(source.material.color);
        if (source.isGridHelper) stroke.material.color.setHex(0x5c433a);
        stroke.material.opacity = source.material.opacity;
        const attribute = source.geometry.getAttribute('position');
        if (attribute === entry.attribute && attribute.version === entry.version) continue;
        const count = source.isLineSegments ? attribute.count / 2 : attribute.count - (source.isLineLoop ? 0 : 1);
        if (count !== entry.count) {
          entry.count = count; entry.positions = new Float32Array(count * 6);
          stroke.geometry.dispose();
          stroke.geometry = new LineSegmentsGeometry().setPositions(entry.positions);
        }
        const positions = entry.positions;
        for (let i = 0; i < count; i++) {
          const start = source.isLineSegments ? i * 2 : i;
          const end = (start + 1) % attribute.count;
          for (let axis = 0; axis < 3; axis++) {
            positions[i * 6 + axis] = attribute.array[start * 3 + axis];
            positions[i * 6 + 3 + axis] = attribute.array[end * 3 + axis];
          }
        }
        stroke.geometry.attributes.instanceStart.data.array.set(positions);
        stroke.geometry.attributes.instanceStart.data.needsUpdate = true;
        entry.attribute = attribute; entry.version = attribute.version;
      }
    },
    snapshot: () => ({ paths: entries.length, minimumWidth: Math.min(...entries.map(entry => entry.stroke.material.linewidth)) }),
  };
}
