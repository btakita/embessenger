export function __conversation(store) {
  if (store.__conversation) return store
  store.__conversation = __conversation
  store.set({text__message: ''})
  store.observe('group__selected', (group__selected, group__selected__) => {
    if (group__selected !== group__selected__) {
      store.set({text__message: '', conversation: ''})
    }
  })
  return store
}