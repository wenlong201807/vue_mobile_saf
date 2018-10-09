<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <ul class="notice_wrap">
      <router-link tag="li" to="/notice/info" class="notice_item" v-for="item of listNotice" :key="item.id">
        <div class="dot"></div>
        <div class="txt">
          <h4 class="h4_title">{{item.title}}</h4>
          <p class="p_time">{{item.time}}</p>
        </div>
        <div class="gt">&gt;</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
export default {
  name: 'Notice',
  data () {
    return {
      listNotice: [
        {title: '通知1', time: '2016年11月15日', id: '110'},
        {title: '通知1', time: '2016年11月15日', id: '111'},
        {title: '通知1', time: '2016年11月15日', id: '112'},
        {title: '通知1', time: '2016年11月15日', id: '113'},
        {title: '通知1', time: '2016年11月15日', id: '114'},
        {title: '通知1', time: '2016年11月15日', id: '115'}

      ],
      header: {
        title: '公司通告',
        confirm: ''
      }
    }
  },
  components: {
    ComHeader

  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
.notice_wrap {
  // background-color: antiquewhite;
  .notice_item {
    height: px2rem(124);
    border-bottom: px2rem(1) solid $border_color1;
    .dot {
      float: left;
      height: px2rem(12);
      width: px2rem(12);
      margin: px2rem(40);
      border-radius: 50%;
      background: yellow;
    }
    .txt {
      float: left;
      padding-top: px2rem(30);
      .h4_title {
        font-size: px2rem(28);
        color: $num_color;
      }
      .p_time {
        font-size: px2rem(22);
        color: $color_per;
      }
    }
    .gt {
      float: right;
      font-size: px2rem(50);
      color: $color_per;
      margin-top: px2rem(27);
      margin-right: px2rem(40);
    }
  }
}
</style>
