import {$mixin__store, compute} from '../store/lib.mjs'
export const __groups = $mixin__store('__groups', store => {
  compute(store, 'title__group__selected__groups', ['group__selected'],
    group__selected =>
      (group__selected && group__selected.attributes.title) || '')
})
