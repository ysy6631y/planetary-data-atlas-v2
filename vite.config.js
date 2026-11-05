import { defineConfig } from 'vite';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';

const sourceHash = createHash('sha256');
for (const file of readdirSync(new URL('./src/', import.meta.url)).sort()) {
  if (/\.(js|css|json)$/.test(file)) sourceHash.update(file).update(readFileSync(new URL(`./src/${file}`, import.meta.url)));
}
sourceHash.update(readFileSync(new URL('./package-lock.json', import.meta.url)));
const buildId = sourceHash.digest('hex').slice(0, 12);

export default defineConfig(({ mode }) => {
  const compatibility = mode === 'compat';
  return {
    base: './',
    define: { __ATLAS_BUILD_ID__: JSON.stringify(buildId) },
    server: { host: '127.0.0.1', port: 5174, strictPort: true },
    // Keep current Three.js for modern browsers; r162 also supports WebGL 1.
    resolve: compatibility ? { alias: [{ find: /^three(?=\/|$)/, replacement: 'three-webgl1' }] } : undefined,
    publicDir: compatibility ? false : 'public',
    plugins: [{
      name: 'same-origin-module-compatibility',
      transformIndexHtml: {
        order: 'post',
        handler: html => html.replace(/<script\b[^>]*>/g, tag => {
          const url = tag.match(/\bsrc=["']([^"']+)["']/)?.[1];
          // All local assets use same-origin requests. The redundant CORS-mode
          // module request crashes the older WebKit test runtime.
          return url && !/^(?:[a-z]+:)?\/\//i.test(url)
            ? tag.replace(/\s+crossorigin(?:=["'][^"']*["'])?/g, '') : tag;
        }),
      },
    }],
    build: {
      target: 'safari14',
      cssTarget: 'safari14',
      ...(compatibility ? {
        outDir: 'dist/compat',
        cssCodeSplit: false,
        rollupOptions: { input: 'src/main.js', output: {
          entryFileNames: 'app.js',
          assetFileNames: asset => asset.names?.some(name => name.endsWith('.css')) ? 'style.css' : 'assets/[name]-[hash][extname]',
        } },
      } : {}),
    },
  };
});
