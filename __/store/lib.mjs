export function compute(store, name, deps, fn) {
  const __ = {}
  __[name] = fn(...deps.map(dep => store.get(dep)))
  store.set(__) // TODO: Remove when https://github.com/sveltejs/sapper/issues/223 is fixed
  store.compute(name, deps, fn)
  return store
}