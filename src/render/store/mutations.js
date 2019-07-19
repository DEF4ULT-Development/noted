import { MUTATION } from './mutation-types'

export default {
  [MUTATION.TASKS]: (state, newTasks) => {
    state.tasks = newTasks
  },
  [MUTATION.SETTINGS]: (state, newSettings) => {
    state.settings = newSettings
  }
}