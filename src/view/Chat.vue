<template>
<div>
  <com-header v-bind:header="header"></com-header>
  <Chatlist></Chatlist>
  <ChatTap></ChatTap>
</div>
</template>
<script>
import ComHeader from '@/components/header.vue'
import Chatlist from '@/components/Chat/Chatlist.vue'
import ChatTap from '@/components/Chat/ChatTap.vue'
export default {
  name: 'Chat',
  data () {
    return {
      header: {
        title: '消息中心',
        icon: '1'
      }
    }
  },
  template: `<div class="tab">
                    <div class="hd">
                        <ul class="clearfix">
                            <slot name="title" v-for="(item, index) in list" :index="index" :text="item.title"> </slot>
                        </ul>
                    </div>
                    <div class="bd">
                        <slot name="content" :content="list[selected].content"></slot>
                    </div>
                </div>
  `,
  components: {
    ComHeader,
    Chatlist,
    ChatTap
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin';
</style>
