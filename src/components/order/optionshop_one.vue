<template>
  <div>

    <div class="shops">
      <div class="img_wrap">
        <img src="" alt="图">
      </div>
      <div class="shop_introduce">
        <h2 class="shop_title">{{item.shopName}}&&&{{item.id}}</h2>
        <p class="intro">
          <span>编码：{{item.bianma}}</span>
          &nbsp; &nbsp; &nbsp;
          <span>规格：{{item.num}}盒/箱</span>
        </p>
        <p class="price">
          <span>价格：</span>
          <span class="num_price">{{item.price}}</span>
        </p>
      </div>
    </div>
    <div class="warehouse">
      <h3 class="house">仓库</h3>
      <span class="big"> &gt; </span>
      <h4 class="local">{{item.city}}{{item.perName}}仓库</h4>
    </div>
    <div class="warehouse">
      <h3 class="house">库存</h3>
      <h4 class="num">{{item.kucun}}</h4>
    </div>
    <div class="nums">
      <h3 class="nn">数量</h3>
      <button class="count_btn" @click="add">+</button>
      <input class="store_num" type="text" v-model="mynum">
      <button class="count_btn" @click="reduce">-</button>
    </div>
    <div class="shopNumBall">{{mynum}}</div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'OptionShopOne',
  // props:['initcount','id']
  props: {

    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      mynum: 1
    }
  },
  watch: {
    mynum: function () {
      // // 获取选择的商品数量
      // console.log(123 + '数量**监听的来的' + this.mynum)
      // 每当nobox子组件中的count变化之后，要立即把最新的数量值，传递给父组件中的按钮***加入购物车中
      this.$emit('getNum', this.mynum)
    }
  },
  methods: {
    // 调用mutations的方法，更新数量
    // this.updateGoodsCount({id:this.id,count:val})
    ...mapMutations(['updateGoodsCount']),

    add () {
      this.mynum++
    },
    reduce () {
      if (parseInt(this.mynum) <= 1) {
        return false
      }
      this.mynum--
    }

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 左右说明
.shops {
  @include submit_options_shops;
  .img_wrap {
    @include submit_options_shops_img_wrap;
  }
  .shop_introduce {
    @include submit_options_shops_shop_introduce;
    .shop_title {
      @include submit_options_shops_shop_title;
    }
    .intro {
      @include submit_options_shops_intro;
    }
    .price {
      font-size: px2rem(24);
      .num_price {
        font-size: px2rem(30);
        color: $color8;
      }
    }
  }
}

.warehouse {
  @include optionshop_hmfbc;
  .big,
  .local,
  .num {
    float: right;
    padding-right: px2rem(28);
    font-size: px2rem(28);
  }
}
.house {
  float: left;
}

.nums {
  height: px2rem(110);
  padding: 0 px2rem(28);
  font-size: px2rem(30);
  background: $h2_color;
  color: $num_color;
  border-bottom: px2rem(1) solid $border_color1;
  .count_btn,
  .store_num {
    float: right;
    height: px2rem(46);
    line-height: px2rem(46);
    margin-top: px2rem(32);
    border: px2rem(1) solid $color_per;
    border-radius: px2rem(5);
    margin-left: px2rem(14);
    text-align: center;
  }
  .count_btn {
    width: px2rem(46);
    font-size: px2rem(36);
  }
  .store_num {
    width: px2rem(90);
    font-size: px2rem(36);
  }
  .nn {
    float: left;
    margin-top: px2rem(40);
  }
}

// 绝对定位。点击加入购物车时，小球内 的数字相对应的添加
.shopNumBall {
  position: fixed;
  // bottom: px2rem(630);
  // right: px2rem(90);
  bottom: px2rem(30);
  right: px2rem(280);
  z-index: 100;
  height: px2rem(50);
  line-height: px2rem(50);
  width: px2rem(80);
  border-top: px2rem(1) solid $border_color1;
  font-size: px2rem(20);
  text-align: center;
  color: #fff;
  background: red;
  // 动画之后，最后显示的位置状态
  // transform: translate(px2rem(30), px2rem(280));
}
</style>
