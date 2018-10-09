<template>
  <div>
    <com-header v-bind:header="header" url="/out"></com-header>
    <div class="choice_box">
      <router-link tag="div" to="/enter/plan_in" class="plan_com active">计划内</router-link>
      <router-link tag="div" to="/enter/plan_out" class="plan_com">计划外</router-link>

    </div>
    <search v-on:search="childSearchClick"></search>
    <router-view></router-view>
    <!-- 测试使用 -->
    <!-- <li v-for="item of enterList" :key="item.id" @click="dropToChildrenpan(item.id,item.shopName,item.perName,item.ID,item.phone,item.remot,item.time)"></li> -->
    <!-- 测试使用 -->

  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
import Search from '@/components/order/search.vue'
// import axios from 'axios'
export default {
  name: 'enter_six',
  data () {
    return {
      txt: '',
      header: {
        title: '进店拜访',
        confirm: ''
      }
    }
  },
  mounted () {

  },
  methods: {

    // 子组件传值到父组件之后，进行查询操作，并将查询结果渲染到页面中展示
    childSearchClick (kk) {
      this.$store.dispatch('queryShopList', kk)
    }
    // 父组件的数据通过路由传递数据参数
    // dropToChildrenpan (id, shopName, perName, ID, phone, remot, time) {
    //   this.$router.push({
    //     path: '/enter/plan_in',
    //     name: 'plan_in',
    //     params: {
    //       id, shopName, perName, ID, phone, remot, time
    //     }
    //   })
    // }
  },
  components: {
    ComHeader,
    Search

  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin';

.choice_box {
  display: flex;
  justify-content: space-around;
  height: px2rem(108);
  line-height: px2rem(108);

  .plan_com {
    font-size: px2rem(28);
    width: px2rem(375);
    text-align: center;
    color: $num_color;
  }
  .plan_com.active {
    background: $border_color1;
    border-bottom: px2rem(6) solid $color1;
  }
}
</style>
