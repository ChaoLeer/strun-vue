// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'loaders.css'
import Toast from './lib/toast.js'
import './components/index.js'
Vue.use(Toast)
// import 'jquery'
/* eslint-disable no-new */

Vue.use(MuseUI)
// global.host = 'http://192.168.25.116/strunApi'
global.host = '../strunApi'
// global.host = 'http://192.168.1.101/strunApi'
global.authdata = ''

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
