import {compute} from '../store/lib.mjs'
export function __groups(store) {
  if (store.__groups) return store
  store.__groups = __groups
  compute(store, 'title__group__selected__groups', ['group__selected'],
    group__selected => (group__selected && group__selected.attributes.title) || '')
  return store
}