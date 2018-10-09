<template>
  <div>
    <h1 class="news">我是ndews.vue里面面的内容</h1>

    <contact></contact>
    <hr>
    <router-link to="/" class="aaa">点我跳回index首页</router-link>
  </div>
</template>
<script>
import Contact from '@/components/news/contact.vue'
export default {
  name: 'sfa-news',
  components: {
    Contact
  }

}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';

.news {
  font-size: px2rem(50);
}

.aaa {
  font-size: px2rem(28);
}
</style>
