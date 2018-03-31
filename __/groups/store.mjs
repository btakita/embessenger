import {compute} from '__/store/lib.mjs'
export function $agent__groups(store) {
  if (store.agent__groups) return store.agent__groups
  store.agent__groups = {store}
  compute(store, 'selected_group_title', ['selected_group'],
    selected_group => (selected_group && selected_group.attributes.title) || '')
  return store.agent__groups
}