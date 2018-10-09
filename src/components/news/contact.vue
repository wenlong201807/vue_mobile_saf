<template>
  <div class="contact">
    <h1 class="aaa">{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: '我是组件***news页面中**联系人部分**组件的内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/style/mixin';

.contact {
  font-size: px2rem(36);
}
.aaa {
  font-size: px2rem(28);
}
</style>
