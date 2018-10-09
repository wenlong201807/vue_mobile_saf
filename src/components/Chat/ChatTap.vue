<template>
<div class="ChatTap">
      <div class="Chat-line ChatTap-box">
        <div class="ChatTap-icon1"></div>
        <div class="ChatTap-title">会话记录</div>
      </div>
      <div class=" ChatTap-box ChatTap-rg">
      <div class="ChatTap-icon2"></div>
       <div class="ChatTap-title">个人信息</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ChatTap',
  props: ['list', 'selected'],
  template: `<div class="tab">
                    <div class="hd">
                        <ul class="clearfix">
                            <slot name="title" v-for="(item, index) in list" :index="index" :text="item.title"> </slot>
                        </ul>
                    </div>
                    <div class="bd">
                        <slot name="content" :content="list[selected].content"></slot>
                    </div>
                </div>`
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin.scss';
.ChatTap {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: px2rem(120);
  width: 100%;
  font-size: px2rem(24);
  border-top: px2rem(1) solid $border_color1;
  .ChatTap-box {
    height: inherit;
    line-height: px2rem(120);
    width: 50%;
    text-align: center;
    .ChatTap-icon1 {
      margin: px2rem(15) 0 px2rem(15) px2rem(164);
      height: px2rem(50);
      width: px2rem(50);
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(../../assets/个人信息.png);
    }
    .ChatTap-icon2 {
      margin: px2rem(15) 0 px2rem(15) px2rem(164);
      height: px2rem(50);
      width: px2rem(50);
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(../../assets/信息.png);
    }
    .ChatTap-title {
      float: left;
      margin-left: px2rem(140);
      height: px2rem(24);
      line-height: px2rem(24);
    }
  }
  .Chat-line {
    border-right: px2rem(1) solid $border_color1;
  }
}
</style>
