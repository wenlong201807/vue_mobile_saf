<template>
  <div>
    <router-link tag="li" to="/active" class="plan_in_wrap" v-for="item of getShopList" :key="item.id">

      <div class="left">
        <h2 class="title">{{item.shopName}}</h2>
        <p class="content">
          <span>ID:{{item.ID}}</span> &nbsp; &nbsp;
          <span>创建时间：{{item.time}} </span>
        </p>
        <p class="content">
          {{item.perName}}
        </p>
      </div>
      <div class="right">
        <div class="remot">✈ &lt; {{item.remot}}</div>
        <div class="jump"> &gt; </div>
        <div class="phone"> 📱 {{item.phone}} </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'plan_in',
  created () {
    axios.get('http://localhost:3000/enter?_page=1&_limit=5', {}).then((r) => {
      // this.plan_in_list.push(...r.data)
      this.AddShopList(r.data)
      // this.myAddSL(r.data)
      // this.$store.commit('AddShopList', r.data)
    })
  },
  methods: {
    // kkk () {
    //   return this.$store.getters.getShopList
    // },
    ...mapMutations([
      'AddShopList'
    ])
    // myAddSL (list) {// mapMutations的原理解释
    //   this.$store.commit('AddShopList', list)
    // }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getShopList'
    ]),
    shopList () { // v-for="item of shopList"
      // return this.$store.state.shopList
      return this.$store.getters.getShopList
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin';

.plan_in_wrap {
  height: px2rem(176);
  margin-left: px2rem(20);
  border-bottom: px2rem(1) solid $border_color1;
  .left {
    float: left;
    box-sizing: border-box;
    height: px2rem(176);
    width: px2rem(400);
    .title {
      font-size: px2rem(28);
      color: $num_color;
      padding-top: px2rem(30);
    }
    .content {
      font-size: px2rem(22);
      color: $color_per;
      padding-top: px2rem(10);
    }
  }
  .right {
    float: right;
    box-sizing: border-box;
    height: px2rem(176);
    width: px2rem(300);
    .remot {
      text-align: right;
      font-size: px2rem(24);
      color: $num_color;
      padding-top: px2rem(30);
      padding-right: px2rem(60);
    }
    .jump {
      text-align: right;
      font-size: px2rem(24);
      color: $color_per;
      padding-top: px2rem(10);
      padding-right: px2rem(30);
    }
    .phone {
      text-align: right;
      font-size: px2rem(24);
      color: $color1;
      padding-top: px2rem(10);
      padding-right: px2rem(60);
    }
  }
}
</style>
