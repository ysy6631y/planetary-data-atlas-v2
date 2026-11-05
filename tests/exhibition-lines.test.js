import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createExhibitionLines } from '../src/exhibition-lines.js';

test('thick orbit paths preserve source coordinates and close the loop', () => {
  const scene = new THREE.Scene();
  const points = [new THREE.Vector3(2, 0, 0), new THREE.Vector3(0, 2, 0), new THREE.Vector3(-2, 0, 0)];
  const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial());
  scene.add(line);
  const original = [...line.geometry.attributes.position.array];
  const strokes = createExhibitionLines(scene, true);
  strokes.resize(1548, 1440); strokes.update();
  const rendered = line.children[0];
  assert.deepEqual([...line.geometry.attributes.position.array], original);
  assert.equal(rendered.geometry.attributes.instanceStart.count, 3);
  assert.equal(rendered.geometry.attributes.instanceEnd.getX(2), points[0].x);
  assert.equal(rendered.geometry.attributes.instanceEnd.getY(2), points[0].y);
  assert(strokes.snapshot().minimumWidth >= 1);
});

test('switching between two and three dataset axes resizes the stroke safely', () => {
  const scene = new THREE.Scene();
  const axis = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(), new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(), new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(), new THREE.Vector3(0, 0, 1),
  ]), new THREE.LineBasicMaterial());
  scene.add(axis);
  const strokes = createExhibitionLines(scene, true); strokes.update();
  axis.geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(1, 0, 0), new THREE.Vector3(), new THREE.Vector3(0, 1, 0)]);
  strokes.update();
  const attribute = axis.children[0].geometry.attributes.instanceStart;
  assert.equal(attribute.count, 2);
  assert([...attribute.data.array].every(Number.isFinite));
});
