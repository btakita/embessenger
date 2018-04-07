export function __gun(store) {
  if (store.__gun) return store
  store.__gun = __gun
  const gun = Gun('http://localhost:8080/gun')
//  const gun = Gun()
  store.set({gun})
  return store
}