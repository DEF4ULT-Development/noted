import Vue from 'vue'
import App from '~Components/App'
import router from './router'
import { store } from './store'

import {i18n} from './plugins/i18n'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faPlus,
  faInfo,
  faArrowCircleDown,
  faArrowCircleUp,
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'

import { faUser, faCog } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faPlus,
  faCog,
  faInfo,
  faArrowCircleDown,
  faArrowCircleUp,
  faArrowCircleLeft,
  faArrowCircleRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.devtools = true
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  el: '#app',
  render: h => h(App),
})

const webFrame = require('electron').webFrame;
webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);
