<template>
  <div class="circle_container">
    <h2 class="time">2016年11月 </h2>
    <ul class="circle_wrap">
      <h2>圆环已经被注释掉了</h2>
      <!-- <li>
        <el-progress class="circle" type="circle" :percentage="80" :width='123'></el-progress>
      </li>
      <li>
        <el-progress type="circle" :percentage="10"></el-progress>
      </li>
      <li>
        <el-progress type="circle" :percentage="50"></el-progress>
      </li> -->
    </ul>
  </div>

</template>

<script>
export default {
  name: 'ThreeLoop',
  data () {
    return {
      // number: number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

.circle_container {
  box-sizing: border-box;
  height: px2rem(370);
  padding-top: px2rem(40);
  background: pink;
  .time {
    font-size: px2rem(28);
    padding-bottom: px2rem(25);
    text-align: center;
    color: $num_color;
  }
  .circle_wrap {
    // overflow: hidden;
    width: px2rem(750);
    background: yellow;
    display: flex;
    justify-content: space-around;
    li {
      text-align: center;
    }
  }
}
</style>
