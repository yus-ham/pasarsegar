import {gpsmonApi, traccarApi} from '../../utils/fetch'

export const repo = {

  get(params={}) {
    return gpsmonApi('GET', '/devices?')
            .then((respon) => {
              return respon.ok ? respon.json() : Promise.reject(respon.status +' '+ respon.statusText)
            })
            //.catch((err) => [])
    return respon.success ? respon.data : []
  },

}
