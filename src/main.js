// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import st from './store/storeee.js'

// /* 加载hotcss响应式布局 */
import '@/plugin/hotcss.js'
// 公共样式***重置样式
import '@/style/common.scss'
import '@/style/mixin.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // st,
  components: { App },
  template: '<App/>'
})
