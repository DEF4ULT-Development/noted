import { GETTER } from './getter-types'

export default {
  [GETTER.TASKS]: state => {
    return state.tasks
  },
  [GETTER.SETTINGS]: state => {
    return state.settings
  },
  [GETTER.LOCALE]: state => {
    return state.locale
  }
}