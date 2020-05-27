import {user} from '../utils/store'
import {goBack} from '../utils/common'
import {traccarApi, qs} from '../utils/fetch'

export const signIn = async(_user) => {
  let respon = await traccarApi('POST', '/session', {
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    body: qs(_user),
  })
  if (respon.ok) {
    user.set((await respon.json()).token)
    goBack()
  }
}

export const signUp = async() => {
  let respon = await traccarApi('POST', '/session', {
      headers: {'content-type': 'application/json'},
  })
}
