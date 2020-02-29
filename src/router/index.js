import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})
export default router