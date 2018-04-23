import {__groups} from '__/groups/store.mjs'
import {__gun} from '__/gun/store.mjs'
import {mixin} from '__/object/lib.mjs'
import {$mixin__store, compute} from '__/store/lib.mjs'
export const __selected__channels = $mixin__store('__selected__channels', store => {
  __groups(store)
  __gun(store)
  compute(store, 'channel_id__selected__channels', ['group__selected'],
    group__selected =>
      group__selected && `channels/group-${group__selected.id}`)
  compute(store, 'messages__selected__channels', ['message__by__message_id__selected__channels'],
    message__by__message_id__selected__channels => {
      if (!message__by__message_id__selected__channels) return []
      const messages__unsorted = []
      for (let message_id in message__by__message_id__selected__channels) {
        const message = message__by__message_id__selected__channels[message_id]
        messages__unsorted.push(message)
      }
      return messages__unsorted.sort((a, b) => {
        if (a.when < b.when) return -1
        else if (a.when > b.when) return 1
        return 0
      })
    })
  store.set({channel__selected__channels: {messages: []}})
  store.observe('channel_id__selected__channels', channel_id__selected__channels => {
    const message__by__message_id__selected__channels = {}
    store.set({message__by__message_id__selected__channels})
    const {gun} = store.get()
    const subscription__channel_id__selected__channels__ = store.get().subscription__channel_id__selected__channels
    if (subscription__channel_id__selected__channels__) {
      subscription__channel_id__selected__channels__.off()
    }
    const subscription__channel_id__selected__channels =
            gun.get(channel_id__selected__channels).map().on(message => {
              if (!message) return
              message__by__message_id__selected__channels[message._['#']] = message
              store.set({message__by__message_id__selected__channels})
            })
    store.set({subscription__channel_id__selected__channels})
  })
  mixin(store, {
    push__messages__selected__channels(channel_id__selected__channels, message) {
      const {gun} = store.get()
      return gun.get(channel_id__selected__channels).set(message)
    }
  })
})
