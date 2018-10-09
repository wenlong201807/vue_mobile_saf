<template>
  <div>
    <ul class="order_wrap">
      <li @click="linkTOsuc_sta(item)" class="order_item" v-for="item in out" :key="item.id">
        <div class="item_le">
          <h3 class="title">{{item.shopName}}</h3>
          <div class="time">下单日期:{{item.time}}</div>
          <div class="local">{{item.city}}{{item.perName}}</div>
        </div>
        <div class="item_ri">&gt;</div>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'out_achive',
  props: {
    out: {
      type: Array,
      require: true
    }
  },
  methods: {
    linkTOsuc_sta (item) {
      // console.log(this.$router)
      this.$router.push(
        {
          name: 'SucSta',
          params: {item}
        })
    }
  }
}</script>

<style lang="scss" scoped>
@import '~@/style/mixin';

.order_wrap {
  margin-left: px2rem(20);
  .order_item {
    box-sizing: border-box;
    height: px2rem(144);
    margin: px2rem(28) 0 0 px2rem(28);
    border-bottom: px2rem(1) solid $border_color1;
    .item_le {
      float: left;
      color: $color_per;
      .title {
        font-size: px2rem(30);
        color: $num_color;
        margin-bottom: px2rem(14);
      }
      .time {
        font-size: px2rem(18);
        margin-bottom: px2rem(10);
      }
      .local {
        font-size: px2rem(18);
      }
    }
    .item_ri {
      float: right;
      margin-top: px2rem(28);
      padding-right: px2rem(28);
      font-size: px2rem(48);
    }
  }
}
</style>
