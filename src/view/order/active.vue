<template>
  <div>
    <com-header v-bind:header="header" url="/index"></com-header>
    <h1 class="title">A超市宝洁11</h1>
    <div class="sales">
      <span>→</span> 本月至今的销量
      <span class="num">25639</span>
    </div>
    <div class="sales">
      <span>→</span> 过往半年月均销量
      <span class="num">25639</span>
    </div>
    <div class="per">
      <span>→</span> 核心分销完成率
      <span class="num">68%</span>
    </div>
    <div class="progress"></div>
    <div class="note_h">历史拜访备注：</div>
    <textarea name="" id="" placeholder="写点啥呢？" class="textarea" cols="30" rows="10"></textarea>
    <router-link tag="div" to="/drop" class="overbooking">下单</router-link>
    <router-link tag="div" to="/attend" class="attendacec">商店签到</router-link>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'

export default {
  name: 'Activeee',
  data () {
    return {
      header: {
        title: '店内活动',
        confirm: '结束拜访'
      }

    }
  },
  components: {
    ComHeader
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin';

.title {
  height: px2rem(84);
  line-height: px2rem(84);
  font-size: px2rem(28);
  padding-left: px2rem(28);
  border-bottom: px2rem(1) solid $border_color1;
  color: $num_color;
  background: $border_color1;
}
.sales {
  height: px2rem(110);
  line-height: px2rem(110);
  font-size: px2rem(28);
  margin-left: px2rem(28);
  border-bottom: px2rem(1) solid $border_color1;
  color: $num_color;
  background: $h2_color;
}
.num {
  float: right;
  // padding-top: px2rem(28);
  font-size: px2rem(28);
  padding-right: px2rem(28);
}
.per {
  margin: px2rem(28) 0 px2rem(20) px2rem(28);
}
.progress {
  height: px2rem(12);
  margin: 0 px2rem(28);
  margin-bottom: px2rem(32);
  background: yellow;
}
.note_h {
  box-sizing: border-box;
  width: px2rem(750);
  height: px2rem(66);
  line-height: px2rem(66);
  font-size: px2rem(28);
  padding-left: px2rem(28);
  border-bottom: px2rem(1) solid $border_color1;
  border-top: px2rem(1) solid $border_color1;
  color: $num_color;
  background: $color7;
}
.textarea {
  width: px2rem(750);
  height: px2rem(200);
  line-height: px2rem(40);
  padding-left: px2rem(28);
  font-size: px2rem(18);
  color: $num_color;
  text-indent: 2em;
  border: none;
  border-bottom: px2rem(1) solid $border_color1;
}
// 两个按钮
.overbooking {
  display: block;
  height: px2rem(84);
  line-height: px2rem(84);
  width: px2rem(400);
  margin: px2rem(200) auto px2rem(40);
  border-radius: px2rem(5);
  border: px2rem(2) solid $color1;
  font-size: px2rem(36);
  text-align: center;
  color: $color1;
  background: $h2_color;
}

.attendacec {
  display: block;
  height: px2rem(84);
  line-height: px2rem(84);
  width: px2rem(400);
  margin: px2rem(0) auto px2rem(0);
  border-radius: px2rem(5);
  border: px2rem(2) solid $color1;
  font-size: px2rem(36);
  text-align: center;
  color: $h2_color;
  background: $color1;
}
</style>
