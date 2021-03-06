import Vue from 'vue'
import App from './App.vue'
import '@/assets/reset.scss'  //格式化css样式
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './api/config.js'
import './mock'
Vue.config.productionTip = false
Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
  // 防止刷新后vuex里丢失token
  store.commit('getToken')
  // 防止刷新后vuex里丢失标签列表tagList
  store.commit('getMenu')
  let token = store.state.user.token
  // 过滤登录页，防止死循环
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  create() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
