import Dexie from 'dexie'
const db = new Dexie('calask')

db.version(1).stores({
  settings: '++id, name, value',
  tasks: '++id, data, prio'
})

export default db