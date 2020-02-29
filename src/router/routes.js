function load(component) {
  return () => import(`../pages/${component}.vue`)
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/login',
    component:load('login'),
    meta:{
      title:'登录',
    }
  },
  {
    path: '/home',
    component: load('home'),
    meta: {
      title: '首页',
      keepalive: true
    }
  },
  {
    path: '/info-search',
    component: load('info-search'),
    meta: {
      title: '标识检索'
    }
  },
  {
    path: '/confirm-user-info',
    component: load('confirm-user-info'),
    meta: {
      title: '确认用户信息'
    }
  },
  {
    path: '/info-collection',
    component: load('info-collection'),
    meta: {
      title: '信息采集'
    }
  },
  {
    path: '/pre-review',
    component: load('pre-review'),
    meta: {
      title: '信息预审'
    }
  },
  {
    path: '/bind',
    component: load('bind'),
    meta: {
      title: '标识绑定'
    }
  },
  {
    path:'/install-activaty',
    component:load('install-activaty'),
    meta:{
      title:'安装激活'
    }
  },
  {
    path:'/bind-success',
    component:load('bind-success'),
    meta:{
      title:'绑定成功'
    }
  },
  {
    path:'/active-success',
    component:load('active-success'),
    meta:{
      title:'激活成功'
    }
  },
  {
    path:'/record',
    component:load('record'),
    meta:{
      title:'订单'
    }
  }
]

export default routes
