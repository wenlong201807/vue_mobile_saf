<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <h2 class="title">乌鲁木齐大小乔超市</h2>
    <div class="shop_hd">
      <span class="name">SKU</span>
      <span class="num">数量</span>
      <span class="pri">价格</span>
    </div>

    <div class="shop_bd">
      <span class="name">疏忽家轻柔纯棉超薄啊钢化玻璃随便拍呢152片</span>
      <span class="num">{{item.num}}</span>
      <span class="pri">{{item.price}}</span>
    </div>

    <div class="choice">
      <div class="left">是否有赠品</div>
      <div class="right">
        <div class="dot"></div>
      </div>
    </div>
    <div class="commont">备注：</div>
    <commont></commont>

    <!-- 底部绝对定位 -->
    <div class="suc_sta_fix">
      <span>总计:</span>
      <span class="red">1950.12</span>
      <span>已优惠:</span>
      <span class="red">258.23</span>
      <span>实付:</span>
      <span class="red">2wsfws</span>
    </div>
  </div>

</template>

<script>
import ComHeader from '@/components/header.vue'
import Commont from '@/components/order/commont.vue'

export default {
  name: 'SucSta',
  data () {
    return {
      header: {
        title: '成功订单状态',
        confirm: ''
      }
    }
  },
  computed: {
    item () {
      return this.$route.params.item
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
// 底部绝对定位
.suc_sta_fix {
  @include suc_sta_fix($f: px2rem(28), $c: left);
  .red {
    display: inline-block;
    width: px2rem(130);
    color: $color9;
  }
}
.title {
  @include suc_sta_title($h: px2rem(84), $f: px2rem(28));
}
.choice {
  @include suc_sta_title($h: px2rem(84), $f: px2rem(28));
  background: $h2_color;
  .left {
    float: left;
  }
  .right {
    float: right;
    width: px2rem(90);
    height: px2rem(50);
    margin-top: px2rem(16);
    padding: px2rem(2);
    border-radius: px2rem(25);
    background: $header_bg;
    .dot {
      float: right;
      width: px2rem(50);
      height: px2rem(50);
      border-radius: 50%;
      background: $h2_color;
    }
  }
}
.commont {
  @include suc_sta_title($h: px2rem(66), $f: px2rem(28));
}
.shop_hd {
  @include suc_sta_shop_hd($h: px2rem(66), $f: px2rem(24));
  .name {
    flex: 11;
  }
  .num {
    flex: 2;
  }
  .pri {
    flex: 3;
  }
}
//具体项目
.shop_bd {
  @include suc_sta_shop_hd($h: px2rem(84), $f: px2rem(22));

  .name {
    flex: 11;
    border-right: px2rem(1) solid $border_color1;
  }
  .num {
    flex: 2;
    border-right: px2rem(1) solid $border_color1;
  }
  .pri {
    flex: 3;
  }
}
</style>
