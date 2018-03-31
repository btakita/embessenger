export function $agent__gun(store) {
  if (store.agent__gun) return store.agent__gun
  store.agent__gun = {store}
  const gun = Gun('http://localhost:8080/gun')
//  const gun = Gun()
  store.set({gun})
  return store.agent__gun
}