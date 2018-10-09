<template>
  <div class="time">
    <span class="change_time">2016年10月12日 </span>
    <span class="arrow_down">▼</span>
    <span class="arrow_right">→</span>
    <span class="change_time">2016年10月12日 </span>
    <span class="arrow_down">▼</span>
  </div>
</template>

<script>
export default {
  name: 'Time'
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.time {
  height: px2rem(110);
  line-height: px2rem(110);
  font-size: px2rem(28);
  padding-left: px2rem(50);
  color: $num_color;
  background: $h2_color;
  .change_time {
    display: inline-block;
    width: px2rem(230);
    // background: $color1;
  }
  .arrow_right {
    font-size: px2rem(20);
    margin: 0 px2rem(40);
  }
  .arrow_down {
    margin-left: px2rem(1);
  }
}
</style>
