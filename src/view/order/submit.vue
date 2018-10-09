<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <div class="info">
      <div class="getman">收货人：朱文龙</div>
      <div class="phone">12365478963</div>
      <div class="local">
        <span class="img_wrap">🤮</span>
        北京市，昌平区，王庄工业园，百北京市，昌平区，王庄工业园，百善镇，和抚顺酒楼三偶</div>
    </div>
    <!-- 模板开始-->
    <div class="shops">
      <div class="img_wrap">
        <img src="" alt="图">
      </div>
      <div class="shop_introduce">
        <h2 class="shop_title">{{item.perName}} </h2>
        <p class="intro">
          <span>{{item.city}}{{item.id}}</span>
        </p>
        <p class="price">
          <span>价格：</span>
          <span class="num_price">{{item.price}} 元</span>
          <span class="fl_ri_num">数量:
            <span class="number">198</span>
          </span>
        </p>
      </div>
      <div class="bot_line"></div>
      <div class="comment">
        备注：<input class="inp" placeholder="备注写在这~" type="text" name="" id="">
      </div>
      <p>购买总数量是**{{totalcount}}</p>
    </div>

    <!--底部确认按钮 -->
    <div class="submit_fix">
      <div class="fix_le">合计:
        <span class="num_red"> 2012553.12 元 </span>
      </div>
      <div @click="submit_order" class="submit_btn"> 确认</div>
    </div>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import ComHeader from '@/components/header.vue'
export default {
  name: 'Submit',
  data () {
    return {
      header: {
        title: '提交订单',
        confirm: ''
      }
    }
  },
  components: {
    ComHeader
  },
  methods: {
    submit_order () {
      alert('提交订单')
    }
  },
  computed: {
    ...mapGetters(['totalcount']),
    item () {
      return this.$route.params.item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 中间的模板
.shops {
  @include submit_options_shops;
  padding-bottom: px2rem(0);
  padding-right: px2rem(0);
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
      .fl_ri_num {
        float: right;
        .number {
          display: inline-block;
          width: px2rem(50);
          text-align: right;
        }
      }
    }
  }
  .bot_line {
    clear: both;
    height: px2rem(22);
    border-bottom: px2rem(1) solid $border_color1;
  }
  .comment {
    height: px2rem(80);
    line-height: px2rem(80);
    font-size: px2rem(30);
    background: $h2_color;
    color: $num_color;
    .inp {
      height: px2rem(40);
      width: px2rem(590);
      font-size: px2rem(30);
      border: none;
    }
  }
}

// 顶部的地址信息
.info {
  box-sizing: border-box;
  width: px2rem(750);
  height: px2rem(170);
  padding: px2rem(28) px2rem(28) 0;
  font-size: px2rem(28);
  background: $color7;
  color: $num_color;
  border-bottom: px2rem(1) solid $border_color1;
  .getman {
    float: left;
  }
  .phone {
    float: right;
  }
  .local {
    clear: both;
    height: px2rem(90);
    margin-top: px2rem(10);
    font-size: px2rem(24);
    // background: yellow;
    color: $color_per;
    .img_wrap {
      float: left;
      height: px2rem(90);
    }
  }
}

// 底部的总价与确认
.submit_fix {
  @include submit_fix;
  .fix_le {
    float: left;
    margin-left: px2rem(28);
    font-size: px2rem(24);
    .num_red {
      font-size: px2rem(28);
      color: $color8;
    }
  }
  .submit_btn {
    @include submit_fix_btn;
  }
}
</style>
