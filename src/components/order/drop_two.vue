<template>
  <div>

    <!-- 我是同一个店家添加的多个商品 -->
    <router-link tag="li" to="/optionshop" class="shop_list">
      <div class="img_wrap">
        <img src="" alt="">
      </div>
      <div class="introduce">
        <h2 class="h2_title">我是动态变化数据</h2>
        <p class="">
          <span>编码:</span>
          <span class="w_num">145632</span>
          <span>规格:</span>
          <span class="w_num">12盒/箱</span>
        </p>
        <p class="price_wrap">
          <span>价格:</span>
          <span class="red">12800 元</span>
          <span class="ri">刷新</span>
          <span class="ri w_num">12800箱</span>
          <span class="ri">库存:</span>
        </p>
      </div>
    </router-link>

  </div>

</template>

<script>

// import axios from 'axios'
export default {
  name: 'dorp_two'

}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 我是同一个店家添加的多个商品
.shop_list {
  height: px2rem(170);
  margin: px2rem(0) 0 px2rem(20) px2rem(28);
  border-bottom: px2rem(1) solid $border_color1;

  .img_wrap {
    float: left;
    height: px2rem(124);
    width: px2rem(124);
    margin-top: px2rem(28);
    border-radius: px2rem(5);
    overflow: hidden;
    border: px2rem(1) solid $border_color1;
  }
  .introduce {
    float: left;
    height: px2rem(124);
    width: px2rem(540);
    margin: px2rem(28) px2rem(0) px2rem(0) px2rem(20);
    // background: pink;
    .h2_title {
      font-size: px2rem(28);
    }
    .w_num {
      display: inline-block;
      width: px2rem(130);
      // background: yellow;
    }
    .price_wrap {
      margin-top: px2rem(16);
      .red {
        font-size: px2rem(24);
        color: $color9;
      }
      .ri {
        float: right;
      }
    }
  }
}
</style>
