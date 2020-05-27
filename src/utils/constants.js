import {get, writable} from 'svelte/store'
import {goto} from '@sveltech/routify'
import {
  backendBaseUrl,
  traccarBaseUrl,
} from './config-local.js'

export const $goto = (route) => {
  return get(goto)(route)
}

export const getParams = (url) => {
  let path = url.split('/')
  return path[path.length - 1]
}
