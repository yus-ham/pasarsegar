import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import del from 'del'
import css from 'rollup-plugin-css-porter'
import {promises as fs} from 'fs'



const staticDir = 'static'
const distDir = 'dist'
const buildDir = `${distDir}/build`
const production = !process.env.ROLLUP_WATCH;
const bundling = process.env.BUNDLING || production ? 'dynamic' : 'bundle'
const shouldPrerender = (typeof process.env.PRERENDER !== 'undefined') ? process.env.PRERENDER : !!production


del.sync(distDir + '/**')

function createConfig({ output, inlineDynamicImports, plugins = [] }) {
  const transform = inlineDynamicImports ? bundledTransform : dynamicTransform

  return {
    inlineDynamicImports,
    input: `src/main.js`,
    output: {
      name: 'app',
      sourcemap: true,
      ...output
    },
    plugins: [
      copy({
        targets: [
          { src: staticDir + '/*', dest: distDir },
          // { src: staticDir + '/**/!(__index.html)', dest: distDir },
          // { src: `${staticDir}/__index.html`, dest: distDir, rename: '__app.html', transform },
        ],
        copyOnce: true,
        flatten: false,
      }),
      appEntry(),
      svelte({
        // enable run-time checks when not in production
        dev: !production,
        hydratable: true,
        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: css => {
          css.write(`${buildDir}/bundle.css`);
        },
        preprocess: pagar(),
      }),

      css({dest: `${buildDir}/vendor.css`}),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve({
        browser: true,
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
      }),
      commonjs(),


      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser(),

      ...plugins
    ],
    watch: {
      clearScreen: false
    }
  }
}


const bundledConfig = {
  inlineDynamicImports: true,
  output: {
    format: 'iife',
    file: `${buildDir}/bundle.js`
  },
  plugins: [
    !production && serve(),
    !production && livereload({watch:distDir, port:process.env.LR_PORT}),
  ]
}

const dynamicConfig = {
  inlineDynamicImports: false,
  output: {
    format: 'esm',
    dir: buildDir
  },
  plugins: [
    !production && livereload(distDir),
  ]
}


const configs = [createConfig(bundledConfig)]
if (bundling === 'dynamic')
  configs.push(createConfig(dynamicConfig))
if (shouldPrerender) [...configs].pop().plugins.push(prerender())
export default configs


function serve() {
  let started = false;
  return {
    writeBundle() {
      if (!started) {
        started = true;
        require('child_process').spawn('npm', ['run', 'serve'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}

function prerender() {
  return {
    writeBundle() {
      if (shouldPrerender) {
        require('child_process').spawn('npm', ['run', 'export'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  }
}

function bundledTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
	<script defer src="/build/bundle.js"></script>
	`)
}

function dynamicTransform(contents) {
  return contents.toString().replace('__SCRIPT__', `
	<script type="module" defer src="https://unpkg.com/dimport@1.0.0/dist/index.mjs?module" data-main="/build/main.js"></script>
	<script nomodule defer src="https://unpkg.com/dimport/nomodule" data-main="/build/main.js"></script>
	`)
}


function appEntry(file = '__app.html') {
  let written = false
  let template = `<!DOCTYPE html><html lang="id">`

  return {
    buildEnd() {
      if (written) {
        return
      }
      if (bundling === 'bundle') {
        template += `<script defer src="/build/bundle.js"></script>`
      } else {
        template += (`
        <script type="module" defer src="/dimport/index.js?module" data-main="/build/main.js"></script>
        <script nomodule defer src="/dimport/nomodule.js" data-main="/build/main.js"></script>
        `)
      }
      written = fs.writeFile(distDir +'/'+ file, template);
    }
  }
}

function pagar() {
	return {
		markup: ({content}) => ({
			code: content
					.replace(/\{#else if /g, '{:else if ')
					.replace(/\{#elseif /g, '{:else if ')
					.replace(/\{#else\}/g, '{:else}')
					.replace(/\{#endif\}/g, '{/if}')
					.replace(/\{#endeach\}/g, '{/each}')
					.replace(/\{#then /g, '{:then ')
					.replace(/\{#catch /g, '{:catch ')
					.replace(/\{#endawait\}/g, '{/await}')
					.replace(/\{#html /g, '{@html ')
					.replace(/\{#debug /g, '{@debug ')
		})
	}
}
