import {$mixin__store} from '../store/lib.mjs'
export const __conversation = $mixin__store('__conversation', store => {
  store.set({text__message: ''})
  store.observe('group__selected', group__selected => {
//    if (changed.group__selected) {
      const {group__selected__} = store.get()
      if (group__selected !== group__selected__) {
        store.set({text__message: '', conversation: ''})
      }
//    }
  })
})
