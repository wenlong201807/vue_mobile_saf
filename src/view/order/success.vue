<template>
  <div>

    <com-header v-bind:header="header"></com-header>
    <search></search>
    <time-order></time-order>
    <achive></achive>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
import Search from '@/components/order/search.vue'
import TimeOrder from '@/components/order/time.vue'
import Achive from '@/components/order/achive.vue'

export default {
  name: 'Success',
  data () {
    return {
      header: {
        title: '成功订单',
        confirm: ''
      }
    }
  },
  components: {
    ComHeader,
    Search,
    TimeOrder,
    Achive
  }
}
</script>
<style lang="scss" scoped>
</style>
