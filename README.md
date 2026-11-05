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

The public site uses a 2560px-wide stage scaled to the browser width, with its
height matching the browser area. This avoids side gutters when Safari's toolbar
reduces the available height. The comparison preview retains 2560×1440 framing.
The public stage has no preview toolbar. `?preview=exhibition` adds preview tools;
`?layout=window` opens the optional responsive layout. Internal browser checks use
`?stage=content`. The render buffer follows the physical stage scale to avoid
oversampling smaller screens. Automatic exploration still changes views over time.

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
- The 8-second ambient WAV preloads independently; sample-bank fetching/decoding
  waits until the browser actually resumes its audio context.
- The exhibition targets a 2560×1440 viewport and DPR 2. The full scene renders
  behind the translucent console at Retina resolution with antialiasing.
  Buffers have a 16-million-pixel ceiling.
  Sustained slow frames gradually reduce render scale to 72% at minimum;
  text stays at native resolution and strokes retain their CSS-pixel thickness.
  Hidden tabs skip animation work and drawing-buffer preservation stays off.
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

## Operator sound controls

The public exhibition now stays in AUTO continuously. Visitor input and `1`/`0`
never switch the scene to MANUAL. `1` enables the continuous data mix (repeating
`1` keeps it on); `0` mutes audio while the scene keeps moving. The drone bed
defaults to 4%, with frequent short data packets and camera-synchronized reveal /
glitch cues. Cursor hides after 3 seconds. Menu rows use 22px and group padding
8px at the canonical stage height. `?interaction=manual` is an explicit developer
review override for source inspection and the earlier camera-controlled sound;
the controls below describe that override. Public operation needs no camera.

- `1`: toggle **AMBIENT** (continuous loop, camera-independent) and **AUTO**
  (existing camera/presence system). Starting from MUTE, `1` starts AMBIENT.
- `0`: immediate **MUTE** for both ambient audio and generated signal voices.
  Camera results cannot undo MUTE. Held keys, modifier shortcuts and numeric
  input inside CSV/select/volume controls do not change modes.
- The small top **AUDIO** readout shows the current mode and actual media
  playback, buffering, blocked or failed status. Open it for an explicit start /
  retry button, AUTO/MUTE buttons, camera restart and ambient volume slider.
- Default manual ambient volume is **15%**, configurable in
  `src/sound-config.js` (`manualAmbientVolume`) or the operator slider. The slider
  preference persists locally where storage is available; modes never persist
  across reloads. Camera-controlled background volume remains separate.
- Normal mode changes fade over 450ms without replacing/restarting the ambient
  element. AUTO retains its presence attack/release. `0` bypasses fades.
- HTML audio `play()` and AudioContext `resume()` run directly in the key/click
  handler, before any camera permission, fetching or decoding. One context and
  one looping media element prevent duplicated playback. The direct media path
  works even without Web Audio, face detection, or 3D graphics. Hidden tabs pause
  sound and returning tabs attempt to resume; the operator can retry explicitly.
- Safari can still block playback at browser/OS level. Use the actual iMac to
  verify its output device and audible volume; a browser test cannot verify a
  physical speaker. The start button provides a click gesture if a key is blocked.

After building, run `npm run test:sound`. Set `ATLAS_WEBKIT_MODULE` as above to
include WebKit. The check denies camera permission and verifies keyboard starts,
looping, fades, AUTO return, instant/sticky mute, held-key handling, editable input,
volume adjustment, one production context, a nonzero decoded audio signal, and
operation without WebGL/AudioContext. Reports go to `validation/sound-operator/`.

## Interface

- Primary composition: 2560×1440 exhibition screen. The reference sphere is
  framed at about 117% of the earlier 6.8-unit view, centered at 42% of viewport
  width and 44% of height. Dataset zoom is independent and centers the actual
  point-cloud mean at distance 4.8 (3.4 for a selected observation). Smaller screens
  retain a compact layout. World coordinates and risk values are unchanged.
- Left: original restrained title, persistent INDEX from the actual nine groups
  and thirteen indicators, existing risk ruler and VIEW DISTANCE at the bottom.
- Right: full-height source readout over the scene, with no DATA STREAM title,
  footer, or dividing lines. Only a compact color-key row sits above the readout. DATA opens the existing dataset selector, ENTITY /
  AXES / CSV ROW controls and contextual inspector as an on-demand overlay.
  The console occupies 34% of the viewport, with a 42% black backdrop and a soft left edge,
  no dividing border or shadow, and
  substantially larger log type. The central origin has an additive stellar
  glow; observation points have a larger guaranteed screen size.
- `src/exhibition-lines.js` draws the exact original line paths as antialiased
  screen-space triangles, at 1.1–2.2 CSS pixels. Native 1px WebGL lines no
  longer determine orbit quality. Original geometries remain for validation.
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
- TRACE: continuous replay of actual cached source records and display
  coordinates, with READOUT pass numbers. All records cycle in source
  order; REFERENCE rows use the actual current boundary values and world positions. This is not a live external data feed.
- At most 140 buffered rows and 180 queued events. A linear `translate3d`
  animation varies the readout throughput in small batches (roughly 5–11 rows/second), with brief irregular 100–380ms output holds,
  without scroll-position catch-up. Only completely offscreen rows are
  recycled. Reduced motion advances discretely every 350ms.
- The scene render loop synchronizes the readout with the current orbit/camera/
  projection phase and shares `EXHIBITION_MOTION_SPEED`. Source rows switch only
  after the corresponding dataset is rendered; boundary transitions show actual
  reference values instead of stale source rows. Hidden pages pause both systems.
- The geometry coordinates are captured when the source is rendered, before
  later entity filtering or axis changes can replace the current layout.

Automatic exploration uses the V1 controller with exhibition timing overrides:
6-second initial observation, 480ms automatic camera moves, 1.05-second indicator
visits in INDEX order, and at most three datasets per boundary at 3.2 seconds
each. Manual focus uses a 380ms ease-out. Real input interrupts; 45 seconds of inactivity
resumes through the overview. Orbits pause during reading; stars keep moving.

## Files changed in V2

`src/main.js`, `src/data-process.js`, `src/select-control.js`,
`vite.config.js`, `package.json`, `package-lock.json`, and this README.
New presentation files include `src/exhibition-ui.js`, `src/exhibition.css`,
`src/exhibition-lines.js`, `src/data-stream.js`, `src/bootstrap.js`, and the
graphics/data fallback modules. Source datasets, risk calculations, spatial
coordinates, the exploration controller, and source inspection are preserved;
rendering, visual intensity, readout pacing and transition timing are tuned
for the installation.

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

For the 27-inch before/after capture workflow, serve the production build at
4174 and run `node scripts/capture-exhibition.mjs after`. Captures use exactly
2560×1440 CSS pixels at DPR 2 and include overview/focus PNGs, a motion preview,
and performance/geometry diagnostics in `validation/exhibition-27/` (ignored by
Git). `ATLAS_FORCE_WEBGL1=1` also runs the complete UI check on the legacy path.

Header/title/operator commands remain visible. Source changes preserve the existing scrolling history. Red trace markers identify actual planetary-reference R > 1; raw source rows are never given an inferred risk threshold.

With the production preview running at 4174, `npm run test:exhibition` checks
the 27-inch composition, data-centered 4.8-unit zoom, persistent header, source
history retention, real exceeded-reference markers, camera-denied manual sound,
the presence gate, decoded audio signal and 45-second idle return. Set
`ATLAS_WEBKIT_MODULE` to include the legacy WebGL 1 WebKit case. Reports and
screenshots go to `validation/exhibition-simulation/`.

The boundary menu follows the supplied preview spacing and fits without scrolling.
The data stream uses 25px stage rows; stars increase to 2400 with subtle pointer parallax.
The persistent bottom status reports camera detection, face-width ratio, near/far
state and actual audio playback/blocking. The operator can click “오디오 허용” to
activate Safari audio while keeping AUTO mode. Camera entry uses 10% face width
(previously 16%), with 7.5% exit hysteresis; this is not a calibrated distance.
`node scripts/check-installation.mjs` checks the public iframe at four physical
window sizes and feeds controlled worker results through the camera/audio gate.

Safari 14 uses a bundled Pico CPU face classifier on a 320×240 regular 2D canvas,
sampled every 240ms. It does not require worker canvases, WebGL 2, WASM or SIMD.
Newer browsers retain the MediaPipe worker and fall back to Pico on engine errors.
Both classifiers process camera frames locally. Vendored Pico code/model and MIT
licenses are under `public/presence/`. `node scripts/check-camera-engine.mjs`
reproduces the old worker failure without OffscreenCanvas and checks actual
portrait/blank classification through capture and presence hysteresis. Its camera
transport is substituted; it does not certify the physical iMac camera or speakers.

Focus transitions and manual zoom-in trigger a short mix of existing 665957
transmission and 511418 reveal fragments. They also work in manual Ambient mode;
autonomous effects remain AUTO-only. Cues expire instead of accumulating, use at
most two voices, and respect MUTE and page visibility. The sound browser check
exercises the cue mix with a denied camera and rapid repeated input.

`node scripts/check-continuous.mjs` checks the public AUTO-only behavior,
camera-denied continuous sound, repeated operator digits, suppressed mouse
takeover, recurring data packets, zoom cue timing and fullscreen-sized resizes.
