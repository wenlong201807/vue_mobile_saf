<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <div class="myorder">我的订单</div>
    <ul class="item_wrap">
      <!-- 左右两侧相对定位 -->
      <div class="ab_com ab_left"></div>
      <div class="ab_com ab_right"></div>
      <!-- 模板开始 -->
      <router-link tag="li" to="/success" class="item">
        <!-- 提示信息 -->
        <div class="news">未读消息：13</div>
        <!-- 图片 -->
        <div class="pic_wrap"></div>
        <h3 class="title">下单成功</h3>
      </router-link>
      <!-- 模板结束 -->
      <router-link tag="li" to="/deal" class="item">
        <!-- 提示信息 -->
        <div class="news">未读消息：13</div>
        <!-- 图片 -->
        <div class="pic_wrap"></div>
        <h3 class="title">处理中</h3>
      </router-link>

      <router-link tag="li" to="/process" class="item">
        <!-- 提示信息 -->
        <div class="news">未读消息：13</div>
        <!-- 图片 -->
        <div class="pic_wrap"></div>
        <h3 class="title">待审核</h3>
      </router-link>

      <router-link tag="li" to="/none" class="item">
        <!-- 提示信息 -->
        <div class="news">未读消息：13</div>
        <!-- 图片 -->
        <div class="pic_wrap"></div>
        <h3 class="title">无效订单</h3>
      </router-link>

    </ul>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'

export default {
  name: 'Static',
  data () {
    return {
      header: {
        title: '订单状态',
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
@import '~@/style/mixin';
.myorder {
  @include suc_sta_title($h: px2rem(84), $f: px2rem(28));
}

// 订单状态中的弹性盒子
.item_wrap {
  @include static_flex_par($w: px2rem(750));
  //左右两侧绝对定位
  .ab_com {
    position: absolute;
    top: px2rem(2);
    width: px2rem(30);
    height: px2rem(700);
    background: $h2_color;
  }
  .ab_left {
    left: 0;
  }
  .ab_right {
    right: 0;
  }
  .item {
    @include static_flex_chi($h: px2rem(308), $f: px2rem(28));
    .news {
      height: px2rem(36);
      line-height: px2rem(36);
      width: px2rem(164);
      border-radius: px2rem(18);
      margin: px2rem(34) auto px2rem(38);
      font-size: px2rem(24);
      color: $h2_color;
      background: $color8;
    }
    .pic_wrap {
      height: px2rem(50);
      width: px2rem(50);
      margin: px2rem(0) auto px2rem(28);
      background: pink;
    }
    .title {
      color: $color_per;
    }
  }
}
</style>
