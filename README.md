# Planetary Data Atlas — V2 exhibition interface

V2 is based on the verified V1 release `v1.0.0` (`2745657`). It has its own
independent repository: https://github.com/ysy6631y/planetary-data-atlas-v2 .
The V1 repository and deployment remain separate. This project contains no
inherited build cache or copied credentials/environment files. Do not push V2
into V1. Dependency folders, builds and local validation captures are ignored.

## V1 release

- Source: https://github.com/ysy6631y/Planetary-Boundaries-Data-Atlas
- Site: https://ysy6631y.github.io/Planetary-Boundaries-Data-Atlas/
- Source tag: `v1.0.0`; source commit: `2745657`; Pages commit: `076b63b`.
- V1 is in the sibling folder `../planetary-data-atlas-v1`. Its source and deployment are preserved.

## Run V2

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174/ . The port is strict and binds to loopback.
V1 can run independently at 5173. Node 22.12+ is required by Vite.

```sh
npm test
npm run build
npm run test:ui
```

Production output is generated in `dist/`. The build now includes a separate
WebGL 1 renderer for older Safari; modern browsers keep Three.js 0.186.1.

## Safari and older iMac compatibility

The original deployment required WebGL 2 and used APIs unavailable in Safari
14.1 (notably `structuredClone`, `Array.at`, and dynamic viewport height units).
This stopped initialization before the 3D scene and index were ready.

- JavaScript and CSS builds target Safari 14. A `100vh` fallback keeps the index
  and scene height valid before dynamic viewport units were introduced.
- A small bootstrap detects actual graphics capability, not browser names.
  WebGL 2 uses the current engine; WebGL 1 loads an isolated Three.js r162 build
  and matching controls/geometries from `dist/compat/`. Only one engine downloads.
- The sound configuration uses equivalent JSON cloning and array indexing.
- Same-origin entry scripts omit the redundant `crossorigin` attribute; the
  older WebKit test runtime crashed when loading a module entry with that flag.
- The ambient WAV is not preloaded. Sample-bank fetching/decoding waits until
  the browser actually resumes its audio context.
- Render buffers are capped at 4 million pixels on WebGL 2 and 1.8 million on
  WebGL 1. WebGL 1 renders at up to 30 fps. Hidden tabs skip animation work;
  multisampling and persistent drawing buffers are disabled to reduce GPU memory.
- If a graphics driver disables all WebGL, the site opens a data view containing
  all nine boundary groups, actual risk values, and paginated original records.
  It does not invent a 3D result on unsupported hardware.
- Safari 14.1 is the compatibility target, not a claim that every historical
  iMac/OS/GPU combination can render 3D. The capability fallback remains available
  when 3D cannot start. Safari 14.1.3 hardware still needs an on-device check.

After `npm run build`, run `npm run test:compat`. It serves the production build
under a GitHub Pages-style subdirectory and checks WebGL 2, forced WebGL 1, and
graphics-disabled data access with Safari 14's missing APIs removed.
Set `ATLAS_WEBKIT_MODULE` to a compatible Playwright module path to include
WebKit. `ATLAS_TEST_URL` can point at the deployed site.
For Safari 14 local testing, use the production preview (`npm exec vite preview`)
after building both renderers; the development server uses the modern engine.

## Interface

- Full-viewport original 3D scene, with transparent left and right overlays.
- Left: original restrained title, persistent INDEX from the actual nine groups
  and thirteen indicators, existing risk ruler and VIEW DISTANCE at the bottom.
- Right: DATA STREAM, existing dataset selector and expandable ENTITY / AXES /
  CSV ROW / context controls, followed by the original contextual inspector.
- REFERENCE, DISTANCE and DATA views retain their existing contents.
- Manual indicator selection opens planetary-reference information; selecting a
  plotted source observation opens its entity, values, units and source record.
  These types come from the existing selection handlers, not visual color guesses.
- RETURN, FOCUS, UI / SOUND and the reference-shell legend remain functional.
- Dataset listboxes stay within the viewport; index and inspector scroll internally.
- Selecting a source point collapses advanced data controls to make room for its
  inspector. They remain available through the existing expand control.

## Data stream

`src/data-stream.js` publishes no simulated downloads, speeds or percentages.

- EVENT: actual initialization, source reading/parsing/rendering, errors, ready
  states, automatic phases, reference selections, entity/axis changes and manual input.
- TRACE: paced readouts of real source provenance and display coordinates. The
  label explicitly distinguishes this presentation from processing events.
- Up to 72 actual observations/records per source are sampled in source order.
  The displayed sample count is stated; original datasets remain complete.
- Maximum 140 visible lines and 180 queued lines; queued traces are discarded
  on context changes. A requestAnimationFrame pump runs only while work is queued,
  at most one text insertion per 38 ms. No independent endless log animation.
- The geometry coordinates are captured when the source is rendered, before
  later entity filtering or axis changes can replace the current layout.

Automatic exploration remains the V1 controller: 5-second initial observation,
indicator visits in INDEX order, at most three datasets per boundary at 5 seconds
each, smooth return and loop. Real input interrupts; 45 seconds of inactivity
resumes through the overview. Orbits pause during reading; stars keep moving.

## Files changed in V2

`src/main.js`, `src/data-process.js`, `src/select-control.js`,
`vite.config.js`, `package.json`, `package-lock.json`, and this README.
New files: `src/exhibition-ui.js`, `src/exhibition.css`, `src/data-stream.js`,
`scripts/check-ui.mjs`. Source datasets, core scene rendering, camera animation,
risk calculations, auto exploration and sound behavior are preserved.

## Verification

The clean V2's 1920×1080 screenshot was byte-identical to V1 before UI edits.
The browser check covers the automatic stream, actual source-point picking,
reference and source inspectors, tabs, dataset listbox bounds, dataset changes,
entity filtering, axis scale, CSV row selection, UI toggle, reference-only groups,
the 45-second idle resume and responsive layouts. It writes screenshots and a JSON
report to a temporary directory printed on completion.

Default browser-test URL is http://127.0.0.1:5174/; override with `ATLAS_TEST_URL`.
The core-preservation check compares the original V1 source files; override its
path with `V1_SOURCE` if needed. Google Chrome must be installed for the browser test.
