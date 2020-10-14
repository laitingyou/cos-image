import Vue from 'vue'

import CosImage  from '../../main'
Vue.use(CosImage)
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
