import db from '../database'
import { MUTATION } from './mutation-types';
import { GETTER } from './getter-types';

const storeSettingData = (commit, data) =>
  db.settings.get({
    name: data.name
  })
  .then(element => {
    element.value = data.newValue
    db.settings.put(element)
    getSettingData(commit, data)
  })
  .catch(err => console.error(`Couldn't save setting ${data}`, err))

const getSettingData = (commit, data) =>
  db.settings.get({
    name: data.name
  })
  .then(settingData => {
    if (settingData != null || settingData != undefined) {
      console.log(data.action)
      commit(data.action, settingData.value)
    } else {
      console.log('no settings')
      db.settings.put({
        name: data.name,
        value: data.default
      })
      console.log(data.action)
      commit(data.action, data.default)
    }
  })
  .catch(err =>
    console.error(`Couldn't load setting ${JSON.stringify(data)}`, err))

const STORE_INTO_DB = (commit, table, data) => {
  GET_FROM_DB(commit, table, data.action)
  db.table(table).put(data).catch(err => console.log(err))
}

const GET_FROM_DB = (commit, table, action) => {
  db.table(table).toArray()
  .then(item => {
    commit(action, item)
  })
  .catch(err => console.log(`Could not load ${table} data -> ${err}`))
}

const DELETE_FROM_DB = (commit, table, data) => {
  db.table(table).where({'id': data.id}).delete()
  GET_FROM_DB(commit, table, data.action)
}

const UPDATE_IN_DB = (commit, table, id, data, action) => {
  db.table(table).where({'id': id}).put(data).delete()
  GET_FROM_DB(commit, table, action)
}

export default {
  addLocale: ({commit}, data) => {
    storeSettingData(commit, data)
  },
  storeTask: ({commit}, data) => {
    STORE_INTO_DB(commit, 'tasks', data)
  },
  deleteTask: ({commit}, data) => {
    DELETE_FROM_DB(commit, 'tasks', data)
  },
  initialLoad: ({ commit, getters }) => {
    getSettingData(commit, {
      "name": "locale",
      "action": MUTATION.LOCALE,
      "default": "de-DE"
    })
    GET_FROM_DB(commit, 'tasks', MUTATION.TASKS)
  }
}