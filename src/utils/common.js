import {goto} from '@sveltech/routify'
import {get} from 'svelte/store'
import {prevUrl} from './store'

export const goBack = (url) => {
  url = get(prevUrl)
  url = url ? url.substr((baseUrl + spaEntry).length) : '/'
  get(goto)(url)
}
