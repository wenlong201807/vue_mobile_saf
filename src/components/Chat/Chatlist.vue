<template>
  <ul class="Chatlist">
    <li v-for="item of ChatList" :key="item.id">
    <div class="user-icon"></div>
    <div class= "Chat-content">
      <div class="user-name"> {{item.author}}</div>
      <div class="last-message">{{item.title}}</div>
    </div>
    <div class= "Chat-time">{{item.lasttimeR}}</div>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Chatlist',
  data () {
    return {
      ChatList: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios
        .get('http://localhost:3000/course?page=1&_limit=5')
        .then(this.getInfoSucc)
        .catch(error => {
          console.log('错误: ' + error)
        })
    },
    getInfoSucc (res) {
      const ChatList = res.data
      this.ChatList = ChatList
      console.log(ChatList)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/mixin';
.Chatlist li{
  overflow:hidden;
  height: px2rem(164);
  border-bottom: px2rem(1) solid #f0f0f0;
  box-sizing: border-box;
  .user-icon {
    float: left;
    margin: px2rem(30) px2rem(24) px2rem(30) px2rem(28);
    width: px2rem(104);
    height: px2rem(104);
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('{{item.imhUrl}}');
  }
  .Chat-content {
    float: left;
    height: px2rem(164);
    .user-name {
      margin-top: px2rem(42);
      margin-bottom: px2rem(13);
      font-size: px2rem(30);
    }
    .last-message {
      color: #989898;
      font-size: px2rem(24);
    }
  }
  .Chat-time {
    float: right;
    margin-top: px2rem(42);
    font-size: px2rem(30);
    color: #989898;
    margin-right: px2rem(28);
  }
}
</style>
