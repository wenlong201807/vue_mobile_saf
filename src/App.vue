<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      title: 'app里的标题'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
