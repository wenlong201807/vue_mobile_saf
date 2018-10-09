<template>
  <div class="login_container">
    <h1 class="title">欢迎登录宝洁SFA系统</h1>
    <div class="info_wrap">
      <div class="login_img"></div>

      <form class="login_form" action="">
        <p class="inp_wrap_p">
          <label for="">公司编码:</label>
          <input class="bitian" type="text" v-model="a">
        </p>
        <p class="inp_wrap_p">
          <label for="">员工编号:</label>
          <input class="bitian" type="text" v-model="b">
        </p>
        <p class="inp_wrap_p">
          <label for="">登录密码:</label>
          <input class="bitian" type="text" v-model="c">
        </p>
        <div class="choice">
          <input class="com check_box" type="checkbox" v-model="isCheckedRember" name="" id="">
          <span class="com ">记住密码</span>
          <input class="com check_box" type="checkbox" v-model="isCheckedLogin" name="" id="">
          <span class="com ">自动登录</span>
        </div>
        <p class="error"></p>
      </form>
    </div>
    <router-link tag="button" to="/index" class="login_btn">登录</router-link>

    <!-- <button @click="handleLogin" type="buttom" class="login_btn">登录</button> -->

  </div>
</template>

<script>
// import axios from 'axios'
// import md5 from 'js-md5'
// import Store from '@/store/store.js'

export default {
  name: 'Login',
  data () {
    return {
      a: '',
      b: '',
      c: '',
      isCheckedLogin: true,
      isCheckedRember: true,
      storage: {}
    }
  },
  created () {

  },
  mounted () {
    // 自动登录
    // if (this.isChecked) {
    //   if (this.storage.getItem('编码') || this.storage.getItem('编号') || this.storage.getItem('密码')) { this.handleLogin() }
    // }
  },
  updated () {

  },
  methods: {

    handleLogin () {
      // // 登录时发送加密字符给后端
      // const a = md5(this.a)
      // const b = md5(this.b)
      // const c = md5(this.c)

      // 记住密码
      // if (this.isCheckedRember) {
      //   this.a = a; this.b = b; this.c = c
      // }

      // axios.post('http://localhost:3000/login', {a: a, b: b, c: c}).then((r) => {
      //   console.log('登陆成功**页面即将跳转至首页', r)
      //   this.storage = window.localStorage
      //   this.storage.setItem('编码', r.data.a)
      //   this.storage.setItem('编号', r.data.b)
      //   this.storage.setItem('密码', r.data.c)
      //   // console.log('设置密码***', this.storage.getItem('编码'))
      //   // window.location.href = '/'
      //   this.$router.push('/index')
      // })
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';

.error {
  text-align: center;
  color: red;
}
.login_container {
  box-sizing: border-box;
  width: px2rem(750);
  padding: 0 px2rem(75) px2rem(200);
  // margin: 0 auto;
  background: $header_bg;
  .title {
    position: relative;
    box-sizing: border-box;
    height: px2rem(188);
    padding-top: px2rem(85);
    font-size: px2rem(36);
    letter-spacing: px2rem(4);
    text-align: center;
    overflow: hidden;
    color: $h2_color;
    // background: burlywood;
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      top: px2rem(170);
      left: px2rem(25);
      height: px2rem(145);
      width: px2rem(550);
      border-radius: px2rem(15);
      background-color: $border_color1;
    }
  }
  .info_wrap {
    box-sizing: border-box;
    padding-top: px2rem(80);
    height: px2rem(836);
    width: px2rem(600);
    border-radius: px2rem(20);
    box-shadow: 5px 5px 20px $color1;
    margin-bottom: px2rem(20);
    background: $h2_color;
    .login_img {
      box-sizing: border-box;
      height: px2rem(190);
      width: px2rem(190);
      border-radius: 50%;
      margin: 0 px2rem(205) px2rem(80);
      background-color: azure;
    }
    .login_form {
      width: px2rem(475);
      margin: 0 auto;
      // background-color: blueviolet;
      .inp_wrap_p {
        box-sizing: border-box;
        height: px2rem(100);
        line-height: px2rem(100);
        border-radius: px2rem(50);
        border: px2rem(2) solid $color1;
        padding: px2rem(0) px2rem(50);
        margin-bottom: px2rem(30);
        font-size: px2rem(28);
        letter-spacing: 2px;
        color: $color1;
        &:nth-child(3) {
          margin-bottom: px2rem(0);
        }

        // // 必填
        .bitian {
          display: inline-block;
          height: px2rem(40);
          width: px2rem(200);
          margin-left: px2rem(20);
          font-size: px2rem(30);
          border: none;
        }
      }
      .choice {
        width: px2rem(470);
        height: px2rem(60);
        line-height: px2rem(60);
        margin: 0 auto;
        padding-left: px2rem(50);
        // background: bisque;
        .com {
          font-size: px2rem(24);
          margin-right: px2rem(20);
        }
        .check_box {
          width: px2rem(24);
          height: px2rem(24);
        }
      }
    }
  }
  .login_btn {
    display: block;
    height: px2rem(100);
    width: px2rem(600);
    border-radius: px2rem(20);
    line-height: px2rem(100);
    font-size: px2rem(36);
    text-align: center;
    border: none;
    box-shadow: 5px 5px 20px $color1;
    background: $h2_color;
    color: $color1;
  }
}
</style>
