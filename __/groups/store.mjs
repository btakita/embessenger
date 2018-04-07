export function __groups(store) {
  if (store.__groups) return store
  store.__groups = __groups
  store.compute('selected_group_title', ['selected_group'],
    selected_group => (selected_group && selected_group.attributes.title) || '')
  return store
}