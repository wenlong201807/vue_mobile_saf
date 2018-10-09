<template>
  <div>
    <div class="header">
      <div class="lf-icon" @click="toBack"></div>
      <div>{{header.title}}</div>
      <div v-if="header.icon == undefined" class="pic" @click="confirm">{{header.confirm}}</div>
      <div v-else class="pic" @click="confirm">
        <div class="rg-icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    url: {
      type: String,
      required: false
    },
    header: {
      type: Object,
      require: true
    }
  },
  methods: {
    toBack () {
      this.$router.go(-1)
    },
    confirm () {
      this.$router.push({
        path: this.url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: px2rem(152);
  font-size: px2rem(36);
  font-family: PingFang SC;
  padding: px2rem(36) px2rem(37) 0;
  color: $h2_color;
  background: $header_bg;
  .lf-icon {
    height: px2rem(42);
    width: px2rem(42);
    background-image: url(../assets/Direction@2x.png);
    background-repeat: no-repeat;
    background-position: center;
  }
  .rg-icon {
    height: px2rem(52);
    width: px2rem(52);
    background-image: url(../assets/-加.png);
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
