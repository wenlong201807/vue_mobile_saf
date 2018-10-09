<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <Optionshop-one v-bind:item="item" @getNum="getSelectCount"></Optionshop-one>

    <!-- 底部的连个按钮 -->
    <div class="bom_btn">
      <div class="com_btn active">取消**购买数量{{selectCount}}</div>
      <div @click="addToCart(item)" class="com_btn">加入购物车</div>
    </div>
    <div class="fix_line"></div>
  </div>

</template>

<script>
import ComHeader from '@/components/header.vue'
import OptionshopOne from '@/components/order/optionshop_one.vue'
import {mapMutations} from 'Vuex'
export default {
  name: 'OptionShop',
  data () {
    return {
      header: {
        title: '产品选择',
        confirm: ''
      },
      selectCount: '',
      flag: false
    }
  },
  methods: {
    ...mapMutations(['addToCar']),
    addToCart (item, count) {
      console.log(this.item)
      // 点击加入购物车
      this.flag = !this.flag
      this.$router.push({
        name: 'Confirm',
        // path: "'/confirm?'+item",
        params: {item, count: this.selectCount}
      })
      // 调用mutations中的addToCar***第一种调用方式
      // this.$store.commit('addToCar', {id: item.id, count: this.selectCount})
      //  第二种调用方式
      this.addToCar({count: this.selectCount, ...item})
    },
    getSelectCount (cc) {
      // 获取选择商品的数量
      // 把用户选择的最新的数量值，保存到data中，方便用户点击加入购物车按钮时，把数量值同步到徽标中
      this.selectCount = cc
    }

  },
  computed: {

    item () {
      return this.$route.params.item
    }
  },
  watch: {
    selectCount: function () {
      console.log('我是子组件传递过来的数量' + this.selectCount)
    }
  },
  components: {
    ComHeader,
    OptionshopOne
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 底部的连个按钮
.bom_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: px2rem(110);
  line-height: px2rem(110);
  width: px2rem(750);
  border-top: px2rem(1) solid $border_color1;
  font-size: px2rem(36);
  text-align: center;
  color: $color9;
  .com_btn {
    float: left;
    width: px2rem(375);
  }
  .active {
    color: $color1;
  }
}
// 底部的中间竖线
.fix_line {
  position: fixed;
  bottom: 0;
  left: px2rem(375);
  z-index: 100;
  height: px2rem(110);
  width: px2rem(0.5);
  background: $border_color1;
}
</style>
