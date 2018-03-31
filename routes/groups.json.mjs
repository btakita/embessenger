import {groups} from '__/groups/data.mjs'
export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify(groups))
}