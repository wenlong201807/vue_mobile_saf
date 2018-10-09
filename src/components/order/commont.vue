<template>
  <div>
    <textarea class="commontt" placeholder="点击写备注内容~">

    </textarea>
  </div>

</template>

<script>
export default {
  name: 'Commont',
  // props: ['commont'],
  data () {
    return {
      // commont: '啊撒旦浪费空间啊'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.commontt {
  box-sizing: border-box;
  width: px2rem(750);
  height: px2rem(200);
  padding: px2rem(28);
  font-size: px2rem(22);
  // text-indent: 2em;
  color: $color_per;
  border: none;
  border-bottom: px2rem(1) solid $border_color1;
}
</style>
