<template>
  <div>

    <com-header v-bind:header="header" url="/perinfo"></com-header>
    <three-loop></three-loop>
    <div class="sep_1px"></div>
    <item-box></item-box>

  </div>
</template>
<script>
import ComHeader from '@/components/header.vue'
import ThreeLoop from '@/components/index/threeLoop.vue'
import ItemBox from '@/components/index/item_box.vue'

export default {
  name: 'Index',
  data () {
    return {
      header: {
        title: '首页',
        confirm: '个人信息'
      }
    }
  },
  components: {
    ComHeader,
    ThreeLoop,
    ItemBox
  },
  methods: {
    toBack () {
      alert('toBack')
    },
    confirm () {
      alert('confirm')
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../style/mixin';

.aaa {
  font-size: px2rem(28);
}
</style>
