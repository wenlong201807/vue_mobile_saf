<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <search></search>
    <achive v-bind:out="out"></achive>
  </div>
</template>

<script>
import axios from 'axios'
import ComHeader from '@/components/header.vue'
import Search from '@/components/order/search.vue'
import Achive from '@/components/order/achive.vue'

export default {
  name: 'OrderOut',
  data () {
    return {
      header: {
        title: '店外订单',
        confirm: ''
      },
      out: []
    }
  },
  components: {
    ComHeader,
    Search,
    Achive
  },
  created () {
    axios.get('http://localhost:3000/out?_page=1&_limit=7').then((res) => {
      console.log(res)
      this.out.push(...res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
</style>
