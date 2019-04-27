// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Element from 'element-ui'
import draggable from 'vuedraggable'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css'
import 'normalize.css'
import '@/assets/iconfont/iconfont.css'

// 动态引入mockjs
if(process.env.NODE_ENV === 'development') {
  require('./mock')
  // import('./mock')
}

Vue.use(Vuex)
Vue.use(Element)
Vue.component('draggable', draggable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
