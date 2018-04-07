export function __user(store) {
  if (store.__user) return store
  store.__user = __user
  return store
}