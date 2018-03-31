import {$agent__groups} from '__/groups/store.mjs'
import {$agent__gun} from '__/gun/store.mjs'
import {compute} from '__/store/lib.mjs'
export function $agent__channels(store) {
  if (store.agent__channels) return store.agent__channels
  store.agent__channels = {store}
  $agent__groups(store)
  $agent__gun(store)
  compute(store, 'selected_channel_id', ['selected_group'],
    selected_group => selected_group && `channels/group-${selected_group.id}`)
  compute(store, 'messages__selected_channel', ['message__by__message_id__selected'],
    message__by__message_id__selected =>
      $messages__selected_channel(message__by__message_id__selected))
  $selected_channel()
  store.push__messages__selected_channel = push__messages__selected_channel
  return store.agent__channels
  function $selected_channel() {
    const selected_channel = {messages: []}
    store.set({selected_channel})
    console.info('$selected_channel|debug|1')
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
  }
  function $messages__selected_channel(message__by__message_id__selected) {
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
  }
  function push__messages__selected_channel(selected_channel_id, message) {
    store.get('gun').get(selected_channel_id).set(message)
  }
}