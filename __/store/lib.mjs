import {Store} from 'svelte/store'
export function $store() {
  const store = new Store()
  if (typeof window === 'object') window.store = store
  return store
}
// TODO: Inline once https://github.com/sveltejs/svelte/issues/1327 is resolved
export function compute(store, name, deps, fn) {
  const values__deps = []
  for (let i=0; i < deps.length; i++) {
    values__deps.push(store.get(deps[i]))
  }
  const __set = {}
  __set[name] = fn(...values__deps)
  store.set(__set)
  store.compute(name, deps, fn)
  return store
}