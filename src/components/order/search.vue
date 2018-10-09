<template>
  <div class="search">
    <img class="search_img" @click="comp_search" src="static/@2x/search@2x.png" alt="🔍" />
    <input class="txt" type="text" v-model="txtyy" placeholder="门店名称编码检索~">
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      txtyy: '瑟拉斯的空间'
    }
  },
  methods: {
    comp_search () {
      // console.log(this.txtyy)
      // console.log('component****search')
      // 子组件向父组件传值方式
      this.$emit('search', this.txtyy)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';

.search {
  height: px2rem(110);
  line-height: px2rem(110);
  background: $color7;
  padding-left: px2rem(20);
  .search_img {
    font-size: px2rem(25);
    background: $color7;
    margin-right: px2rem(10);
  }
  .txt {
    height: px2rem(50);
    width: 80%;
    font-size: px2rem(30);
    background: $color7;
    border: none;
  }
}
</style>
