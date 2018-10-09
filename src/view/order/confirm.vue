<template>
  <div>
    <com-header v-bind:header="header"></com-header>

    <!--添加的店家 -->
    <div class="conf_wrap">
      <div class="conf_hd">
        <input type="radio" name="" class="all_radio" id="">
        <h2 class="title">{{item.shopName}}</h2>
        <div class="notes">备注
          <span>tu</span>
        </div>
      </div>
      <!-- 我是同一个店家添加的多个商品 -->
      <li class="shop_list">
        <input type="radio" name="" class="all_radio" id="">
        <div class="img_wrap">
          <img src="" alt="">
        </div>
        <div class="introduce">
          <h2>{{item.perName}}*购买产品的id值为* {{item.id}}</h2>
          <p>{{item.city}}**购买数量为****</p>
          <div>
            价格:
            <span>{{item.price}} 元</span>
          </div>
        </div>
      </li>
    </div>

    <!-- 获取购物车中的数量 {{countObj[item.id]}}-->

    <!--底部确认按钮 -->
    <div class="submit_fix">
      <div class="all">
        <input type="radio" name="" class="all_radio" id=""> 全选
      </div>
      <div class="fix_le">合计:
        <span class="num_red"> 2012553.12 元 </span>
      </div>
      <div @click="toSubmit(item)" class="submit_btn">确认</div>

    </div>
  </div>
</template>
<script>
import ComHeader from '@/components/header.vue'
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'Confirm',
  data () {
    return {
      header: {
        title: '保定会有超市连锁',
        confirm: ''
      }
    }
  },
  components: {
    ComHeader
  },
  methods: {
    initdata () {
      axios.get('http://localhost:3000/drop/' + this.idstr).then((r) => {
        console.log(r)
        // 看后台返回的内容是啥？再循环输出到页面中v-for="item of goodslist"
        if (r.status === 0) return (this.goodslist = '没有商品在购物车中')
      })
    },

    toSubmit (item) {
      this.$router.push({
        name: 'Submit',
        params: {item}
      })
    }
  },
  computed: {
    ...mapGetters(['idstr'], ['countObj'], ['topages']),

    item () {
      return this.$route.params.item
    }
  },
  created () {
    this.initdata()
    console.log(this.topages)
  }

}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 添加的店家
.conf_wrap {
  overflow: hidden;
  .conf_hd {
    height: px2rem(84);
    line-height: px2rem(84);
    font-size: px2rem(28);
    padding: 0 px2rem(28);
    border-bottom: px2rem(1) solid $border_color1;
    background: $color7;
    .all_radio {
      @include sma_radio;
      margin-top: px2rem(22);
    }
    .title {
      float: left;
      color: $num_color;
    }
    .notes {
      float: right;
      color: $color1;
    }
  }
  // 我是同一个店家添加的多个商品
  .shop_list {
    height: px2rem(180);
    padding-left: px2rem(28);
    border-bottom: px2rem(1) solid $border_color1;
    // background: yellowgreen;
    .all_radio {
      @include sma_radio;
      margin-top: px2rem(77);
    }
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
      width: px2rem(490);
      margin: px2rem(28) px2rem(0) px2rem(0) px2rem(20);
      // background: pink;
    }
  }
}

// 底部的总价与确认
.submit_fix {
  @include submit_fix;
  .all {
    float: left;
    margin-left: px2rem(28);
    // 小圆圈
    .all_radio {
      @include sma_radio;
      margin-top: px2rem(35);
    }
  }
  .fix_le {
    float: left;
    margin-left: px2rem(28);
    .num_red {
      color: $color8;
    }
  }
  .submit_btn {
    @include submit_fix_btn;
  }
}
</style>
