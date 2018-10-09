<template>
  <div>

    <!-- 我是同一个店家添加的多个商品 -->
    <li v-for="item in getDropList" :key="item.id" class="shop_list">
      <div @click="toCheck(item)" class="img_wrap">
        <img class="img_item" src="@/assets/logo.png" alt="">
      </div>
      <div class="introduce">
        <h2 @click="toCheck(item)" class="h2_title">{{item.shopName}}*购买产品的id值为**{{item.id}}</h2>
        <p class="">
          <span>编码:</span>
          <span class="w_num">{{item.bianma}}</span>
          <span>规格:</span>
          <span class="w_num">{{item.num}}盒/箱</span>
        </p>
        <p class="price_wrap">
          <span>价格:</span>

          <span class="red">{{item.price}} 元</span>
          <span class="ri">刷新</span>
          <span class="ri w_num">{{item.kucun}}箱</span>
          <span class="ri">库存:</span>
        </p>
      </div>
    </li>

  </div>

</template>

<script>

import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'dorp_one',
  methods: {
    ...mapMutations([
      'addDropList'
    ]),
    toCheck (item) {
      console.log(item)
      this.$router.push({
        name: 'OptionShop',
        params: {item}
      })
    }
  },
  computed: {
    ...mapGetters([
      'getDropList'
    ])
  },
  created () {
    axios.get('http://localhost:3000/drop?_page=1&_limit=5').then((r) => {
      this.addDropList(r.data)
    })
  }

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
    .img_item {
      width: 100%;
    }
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
