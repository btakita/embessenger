import {__groups} from '__/groups/store.mjs'
import {__gun} from '__/gun/store.mjs'
import {mixin} from '__/object/lib.mjs'
export function __channels(store) {
  if (store.__channels) return store
  store.__channels = __channels
  __groups(store)
  __gun(store)
  store.compute('selected_channel_id', ['selected_group'],
    selected_group => selected_group && `channels/group-${selected_group.id}`)
  store.compute('messages__selected_channel', ['message__by__message_id__selected'],
      message__by__message_id__selected => {
      if (!message__by__message_id__selected) return []
      const messages__unsorted = []
      for (let message_id in message__by__message_id__selected) {
        const message = message__by__message_id__selected[message_id]
        messages__unsorted.push(message)
      }
      return messages__unsorted.sort((a, b) => {
        if (a.when < b.when) return -1
        else if (a.when > b.when) return 1
        return 0
      })
    })
  __selected_channel(store)
  mixin(store, {
    push__messages__selected_channel(selected_channel_id, message) {
      return store.get('gun').get(selected_channel_id).set(message)
    }
  })
  return store
}
export function __selected_channel(store) {
  if (store.__selected_channel) return store
  store.__selected_channel = __selected_channel
  const selected_channel = {messages: []}
  store.set({selected_channel})
  store.observe('selected_channel_id', selected_channel_id => {
    const message__by__message_id__selected = {}
    store.set({message__by__message_id__selected})
    const gun = store.get('gun')
    const subscription__selected_channel_id__ = store.get('subscription__selected_channel_id')
    if (subscription__selected_channel_id__) {
      subscription__selected_channel_id__.off()
    }
    console.info('observe selected_channel_id|debug|1')
    const subscription__selected_channel_id =
            gun.get(selected_channel_id).map().on(message => {
              if (!message) return
              message__by__message_id__selected[message._['#']] = message
              store.set({message__by__message_id__selected})
            })
    store.set({subscription__selected_channel_id})
  })
  return store
}
