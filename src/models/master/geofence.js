import {qs, gpsmonApi, traccarApi} from '../../utils/fetch'

export default {

  get(params={}) {
    if (typeof params === 'number') {
      params = `id=`+ params
    } else {
      params = qs(params)
    }
    return gpsmonApi('GET', '/geofences?'+ params)
            .then((respon) => {
              return respon.ok ? respon.json() : Promise.reject(respon.status +' '+ respon.statusText)
            })
            //.catch((err) => [])
    return respon.success ? respon.data : []
  },

}
