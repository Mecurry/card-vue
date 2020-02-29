import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './assets/api'

Vue.config.productionTip = false
Vue.prototype.back = () => {
  router.go(-1);
}
Vue.prototype.$api = api
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
