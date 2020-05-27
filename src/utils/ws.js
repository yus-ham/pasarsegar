import {get} from 'svelte/store'
import {user} from './store'
import {traccarUrl} from './constants'

const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
const baseUrl = traccarUrl.replace(/^https?:\/\//, '')

let socket
let wsOpts = {}

const connect = () => {
  if (socket) return

  socket = new WebSocket(`${protocol}//${baseUrl}/socket`)

  socket.onopen = (event) => {
    console.info('[WS] opened')
    wsOpts.onWsConnect && wsOpts.onWsConnect(event)
  }

  socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      data.devices && wsOpts.updateDevices(data.devices)
      data.positions && wsOpts.updatePositions(data.positions)
      data.events && wsOpts.displayNotifications(data.events)
  }

  socket.onclose = (event) => {
    socket = null
    if (event.wasClean) {
      console.info(`[WS] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.warn('[WS] Connection died')
      console.info('Restarting connection')
      setTimeout(connect, 10000)
    }
  }

  socket.onerror = (event) => {
    console.error('[WS] error')
    console.error(event)
    //console.info('Restarting connection')
    //setTimeout(() => connect(map), 10000)
  }
}


export default (opts = {}) => {
    wsOpts = opts
    get(user) && connect()

    user.subscribe((data) => {
      if (data) {
        connect()
      } else {
        socket && socket.close()
      }
    })
}
