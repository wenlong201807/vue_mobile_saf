<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <ul class="item_wrap">

      <!-- 模板开始 -->
      <li class="item">

      </li>
      <!-- 模板结束 -->
      <li class="item">
      </li>
      <li class="item">
      </li>
      <li class="item">
      </li>
    </ul>
    <div class="myorder">备注：</div>
    <commont></commont>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
import Commont from '@/components/order/commont.vue'
export default {
  name: 'Attend',
  data () {
    return {
      header: {
        title: '商店签到',
        confirm: ''
      }
    }
  },
  components: {
    ComHeader,
    Commont

  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin';
.myorder {
  @include suc_sta_title($h: px2rem(84), $f: px2rem(28));
}

// 订单状态中的弹性盒子
.item_wrap {
  box-sizing: border-box;
  @include static_flex_par($w: px2rem(750));
  padding: px2rem(28) px2rem(28) px2rem(0) px2rem(28);
  .item {
    box-sizing: border-box;
    height: px2rem(220);
    width: px2rem(220);
    margin-bottom: px2rem(28);
    margin-right: px2rem(17);
    border: px2rem(1) solid $border_color1;
    &:nth-child(3n) {
      margin-right: px2rem(0);
    }
  }
}
</style>
