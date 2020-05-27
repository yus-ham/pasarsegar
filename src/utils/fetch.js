import {get} from 'svelte/store'
import {user} from './store'
import {backendUrl, traccarUrl, mudikUrl} from './constants'
import {fetch} from 'whatwg-fetch'


const setDefaultRequest = (opts) => {
  if (!opts.headers) {
    opts.headers = {}
  }

  const hasContentType = Object.keys(opts.headers).find((hdr) => hdr.toLowerCase() === 'content-type')

  if (!hasContentType) {
    opts.headers['content-type'] = 'application/json'
    opts.body && (opts.body = JSON.stringify(opts.body))
  }
  opts.headers['accept'] = 'application/json'
}

const __fetch = async(method, url, opts={}) => {
  opts.method = method
  typeof method === 'function' && method(opts)
  setDefaultRequest(opts)
  return fetch(url, opts)
}

export const qs = (data) => {
  return Object.keys(data||{}).map((key) => key +'='+ data[key]).join('&')
}

export const auth = (user, hdrs) => {
  hdrs = hdrs || {}
  hdrs.Authorization = 'Basic '+ btoa(user.email +':'+ user.password)
  return hdrs
}

export const gpsmonApi = async(method, path, opts={}) => {
  return __fetch(method, backendUrl + path + '&access_token='+ get(user), opts)
}

export const traccarApi = async(method, path, opts={}) => {
  opts.credentials = 'include'
  return __fetch(method, traccarUrl + path, opts)
}

export const mudikApi = async(method, path, hdrs, data) => {
  return __fetch(method, mudikUrl + path, hdrs, data)
}

export const getDevGroups = async() => {
  const respon = await gpsmonApi('GET', '/device-groups')
  return respon.success ? respon.data : []
}

export const getDevices = async(groupId) => {
  const respon = await gpsmonApi('GET', '/devices?group_id='+ groupId)
  return respon.success ? respon.data : []
}
