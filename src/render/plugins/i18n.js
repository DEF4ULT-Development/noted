import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { store } from '../store'
import { GETTER } from '../store/getter-types';

Vue.use(VueI18n)

export const i18n = new VueI18n({

  // ! ####################################################
  // FIXME: loading languages on statup broken 🐛
  // ! ####################################################

  locale: store.state.locale,
  messages: {
    'de-DE': require('../locales/de-DE.json'),
    'en-US': require('../locales/en-US.json')
  }
})
