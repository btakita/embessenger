import {$mixin__store} from '../store/lib.mjs'
export const __gun = $mixin__store('__gun', store => {
  const gun = Gun('http://localhost:8080/gun')
//  const gun = Gun()
  store.set({gun})
})
