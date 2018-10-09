import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import actions from './actions'
// import mutations from './mutations'
// import cart from './modules/cart'

Vue.use(Vuex)
// 每当初始化项目的时候，就先从本地存储中取一下数据
let car = window.JSON.parse(localStorage.getItem('cart') || '[]')

export default new Vuex.Store({
  state: {
    AppName: '宝洁快消品移动管理端',
    shopList: [],
    dropList: [], // 下单页面中的初始化数据
    // 在购物车中，把每个商品储存为一个id和数量值的数组集合
    cart: car // 购物车数组
  },
  // 若是多个页面公用的后台数据，使用actions这种方式请求
  actions: {
    // 进入页面中的后台数据**搜索框中的
    queryShopList (context, q) {
      axios
        .get('http://localhost:3000/enter?_page=1&_limit=5&q=' + q, {})
        .then(res => {
          context.commit('AddShopList', res.data)
        })
    }
  },
  mutations: {
    changeAppName: (state, newName) => {
      state.AppName = newName
    },
    AddShopList (state, list) {
      state.shopList = [...list]
    },
    addDropList (state, list) {
      state.dropList = [...list]
    },
    addToCar (state, goods) {
      // 将商品添加到购物车** 需要做一个小判断，如果购物车中原来有，则只需要添加数量，没有则需要添加id和count
      // let flag = false
      // state.cart.some(item => {
      //   if (item.id === goods.id) {
      //     // 如果找到了对应的商品，则直接更新数量
      //     item.count += goods.count
      //     flag = true
      //     // 终止后续的循环
      //     return true
      //   }
      // })
      // 如果没找到，则直接push到购物车
      // if (!flag) {
      //   state.cart.push(goods)
      // }
      state.cart.push(goods)
      // 为了持久化存储购物车中的数据，可以把购物车中的商品。
      // 序列化出来，存储到localstorage中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    updateGoodsCount (state, goods) {
      // 根据传递过来的商品 的信息，更新购物车中商品的数量
      // state.cart.some(item => {
      //   if (item.id === goods.id) {
      //     item.count = goods.count
      //     return true
      //   }
      // })

      // 为了持久化存储购物车中的数据，可以把购物车中的商品。
      // 序列化出来，存储到localstorage中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    }
  },
  getters: {
    getAppName: state => {
      return state.AppName
    },
    getShopList: state => {
      return state.shopList
    },
    getDropList: state => {
      return state.dropList
    },
    totalcount (state) {
      // 徽标中的商品数量
      let c = 0
      // getters的特性，只要依赖的数据变化了，必然会重新计算getters的值
      state.cart.forEach(item => (c += item.count))
      return c
    },
    idstr (state) {
      // 获取购物车中所有选中商品 的字符串id值
      let arr = []
      state.cart.forEach(item => arr.push(item.id))
      return arr.join(',')
    },
    countObj (state) {
      // 获取购物车中 商品的id和商品数量的键值对 的对应关系
      let o = {}
      state.cart.forEach(item => (o[item.id] = item.count))
      return o
      // o={id1:count1,id2:count2}
      // countObj[item.id] 即可获取数量
    },
    topages: state => {
      return state.cart
    }
  }
})
