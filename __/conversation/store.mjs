export function __conversation(store) {
  if (store.__conversation) return store
  store.__conversation = __conversation
  store.set({text__message: ''})
  store.observe('selected_group', (selected_group, selected_group__) => {
    if (selected_group !== selected_group__) {
      store.set({text__message: '', conversation: ''})
    }
  })
  return store
}