import {writable, get} from 'svelte/store'

export const pageTitle = writable('GPS Tracker')
export const devices = writable({})
export const currUpdateDevice = writable({})

export const user = (() => {
  const _user = writable(null)

  try {
      _user.set(atob(localStorage.getItem('sess')))
  } catch(e) {
      console.error(e)
  }

  _user.subscribe((data) => {
      if (data) {
        data = btoa(data)
      }
      localStorage.setItem('sess', data)
  })

  return _user
})()

export const currDevGroup = writable(0)
export const prevUrl = writable()
