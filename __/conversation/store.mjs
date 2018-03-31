export function $agent__conversation(store) {
  if (store.agent__conversation) return store.agent__conversation
  store.agent__conversation = {store}
  store.set({text__message: ''})
  store.observe('selected_group', (selected_group, selected_group__) => {
    if (selected_group !== selected_group__) {
      store.set({text__message: '', conversation: ''})
    }
  })
  return store.agent__conversation
}