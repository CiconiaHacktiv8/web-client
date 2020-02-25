import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/style/custom.scss'
import VueImageChooser from 'vue-image-chooser'
import VueToast from 'vue-toast-notification'

import 'vue-toast-notification/dist/index.css'

Vue.use(VueToast, { position: 'top' })
Vue.use(BootstrapVue)
Vue.use(VueImageChooser)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
