import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import del from 'del';
import css from 'rollup-plugin-css-porter';
import {promises as fs} from 'fs'
import {basepath} from './routify.config.mjs';


const staticDir = 'static'
const distDir = 'dist'
const buildDir = `${distDir}/build`
const production = !process.env.ROLLUP_WATCH;
const bundling = process.env.BUNDLING || production ? 'dynamic' : 'bundle'
const shouldPrerender = (typeof process.env.PRERENDER !== 'undefined') ? process.env.PRERENDER : !!production


del.sync(distDir + '/**')
setBasepath()

function createConfig({ output, inlineDynamicImports, plugins = [] }) {
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
        targets: [{ src: staticDir + '/*', dest: distDir }],
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
        css: (css) => css.write(`${buildDir}/bundle.css`),
        preprocess: pagar(),
      }),

      css({dest: `${buildDir}/global.min.css`}),

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


function appEntry() {
  let written = false
  let template = `<!DOCTYPE html><html lang="id">`

  return {
    buildEnd() {
      if (written) {
        return
      }
      if (bundling === 'bundle') {
        template += `<script defer src="${basepath}/build/bundle.js"></script>`
      } else {
        template += `\n<script type="module" defer src="${basepath}/dimport/index.js?module" data-main="${basepath}/build/main.js"></script>`
                  + `\n<script nomodule defer src="${basepath}/dimport/nomodule.js" data-main="${basepath}/build/main.js"></script>`
      }
      written = fs.writeFile(distDir +'/__app.html', template);
    }
  }
}

async function setBasepath() {
  let config = './node_modules/@sveltech/routify/tmp/config.js'
  let script = await fs.readFile(config)

  if (script.indexOf('export const _basepath_') > 0) {
    return
  }
  fs.appendFile(config, `\n\nexport const _basepath_ = '${basepath}'\n`)
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
