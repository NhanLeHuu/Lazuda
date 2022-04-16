import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import viLocale from './vi'
import { en, ja } from 'vuejs-datepicker/dist/locale'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    datepicker: en
  },
  vi: {
    ...viLocale,
    datepicker: ja
  }
}

const i18n = new VueI18n({
  locale: 'vi',
  messages
})

export default i18n
