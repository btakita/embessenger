export function $agent__user(store) {
  if (store.agent__user) return store.agent__user
  store.agent__user = {store}
  return store.agent__user
}