import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { Plugin } from 'vue-fragment'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/vi'
import i18n from './localize'
import './permission'
import 'babel-polyfill'
import 'idempotent-babel-polyfill'
import firebase from 'firebase'
import SlideVerify from 'vue-monoplasty-slide-verify'
import ScrollBar from '@morioh/v-smooth-scrollbar'
// import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'
import Chat from 'vue-beautiful-chat'
import VueSocialSharing from 'vue-social-sharing'
import { env } from '@/env/env'
Vue.config.productionTip = false
const load = Vue.observable({
    loaded: false
})
const ordered = Vue.observable({
    order: {
        dadat: 0,
        dahuy: 0
    }
})

Object.defineProperty(Vue.prototype, '$ordered', {
    get() {
        return ordered.order
    },

    set(value) {
        ordered.order = value
    }
})

Object.defineProperty(Vue.prototype, '$load', {
    get() {
        return load.loaded
    },

    set(value) {
        load.loaded = value
    }
})

Vue.use(VueSocialSharing);
Vue.use(ElementUI, { locale })
Vue.use(Plugin)
Vue.use(SlideVerify)
Vue.use(ScrollBar)
Vue.use(Chat)
Vue.use(new VueSocketIO({
        debug: true,
        connection: env.server + ':5000'
    }))
    // Initialize Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAYgsxAvmKI3gs1SnAIWqP2xzP8MZtvlBU',
    authDomain: 'anikoi.firebaseapp.com',
    databaseURL: 'https://anikoi.firebaseio.com',
    projectId: 'anikoi',
    storageBucket: 'anikoi.appspot.com',
    messagingSenderId: '125557393284',
    appId: '1:125557393284:web:0be416e830ea5dcf6e7fd1',
    measurementId: 'G-ZYY7W9YZBD'
})

firebase.auth().onAuthStateChanged(() => {
    new Vue({
        router,
        store,
        i18n,
        render: h => h(App)
    }).$mount('#app')
})