import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Avue)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
