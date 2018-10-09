<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <div class="info_wrap" v-for="item of infoList" :key="item.id">
      <h2 class="h2_title">{{item.title}}</h2>
      <p class="p_content">{{item.content}}
      </p>
      <div class="time">时间：{{item.startTime}} - {{item.endTime}}</div>
      <div class="local">地点：{{item.local}}</div>
    </div>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
export default {
  name: 'NoticeInfo',
  data () {
    return {
      header: {
        title: '公告信息',
        confirm: ''
      },
      infoList: [
        {id: 11, title: '销售代表团全体成员', content: '今天要放假了今天要放假了今天要放假了', startTime: '2016.5.12', endTime: '2018.5.2', local: '背景王庄工业园'}
      ]
    }
  },
  components: {
    ComHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

.info_wrap {
  padding: px2rem(20);
  font-size: px2rem(24);
  color: $num_color;
  .h2_wrap {
    font-size: px2rem(28);
  }
  .p_content {
    padding: px2rem(20) 0;
    text-indent: 2em;
  }
}
</style>
