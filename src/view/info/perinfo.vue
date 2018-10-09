<template>
  <div>
    <com-header v-bind:header="header"></com-header>
    <div class="img_wrap">
      头像位置
      <img src="" alt="我是头像">
    </div>
    <div class="sep_line"></div>
    <!-- 个人信息列表部分 -->
    <div v-for="item of listInfo" :key="item.id">
      <div class="info_wrap">
        <p class="item_info_fix">员工信息:</p>
        <p class="item_info_change">{{item.name}}</p>
      </div>
      <div class="info_wrap">
        <p class="item_info_fix">手机号码:</p>
        <p class="item_info_change">{{item.phone}}</p>
      </div>
      <div class="info_wrap">
        <p class="item_info_fix">部门:</p>
        <p class="item_info_change">{{item.section}}</p>
      </div>
    </div>
    <!-- 上次登录时间 -->
    <div class="time">
      <span>上次登录时间:</span>
      <span>2016-09-23 19:53</span>
    </div>
    <!-- 底部重新登录与注销 -->
    <div class="choice_wrap">
      <router-link tag="div" to="/" class="ali_line choice_com  choice_one">重新登录</router-link>
      <router-link tag="div" to="/" class=" choice_com choice_two">注销</router-link>
    </div>
  </div>
</template>

<script>
import ComHeader from '@/components/header.vue'
export default {
  name: 'PerInfo',
  data () {
    return {
      listInfo: [
        // {name: '朱文龙', phone: 18479783236, section: '市场开拓'},
        // {name: '童胡伟', phone: 18479783236, section: '市场开拓'},
        {name: '朱文龙', phone: 18479783236, section: '市场开拓', id: 'dd'}
      ],
      header: {
        title: '个人信息',
        confirm: '修改密码'
      }
    }
  },
  components: {
    ComHeader

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
.img_wrap {
  height: px2rem(220);
  width: px2rem(220);
  margin: px2rem(56) auto;
  border-radius: 50%;
  overflow: hidden;
  background: beige;
}
.sep_line {
  height: px2rem(0.5);
  background: $border_color1;
}
.info_wrap {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: px2rem(110);
  padding-right: px2rem(28);
  margin-left: px2rem(28);
  font-size: px2rem(28);
  border-bottom: px2rem(1) solid $border_color1;
  // background: blanchedalmond;
  &:last-child {
    border-bottom: none;
  }
  .item_info_fix {
    color: $color_per;
  }
  .item_info_change {
    color: $num_color;
  }
}

// 上次登录时间
.time {
  height: px2rem(84);
  line-height: px2rem(84);
  padding-left: px2rem(28);
  font-size: px2rem(24);
  border: 1px solid red;
  color: $num_color;
  border-color: $border_color1 transparent $border_color1 transparent;
}

// 底部重新登录与注销
.choice_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: px2rem(100);
  width: 100%;
  font-size: px2rem(36);
  border-top: px2rem(1) solid $border_color1;
  .ali_line {
    border-right: px2rem(1) solid $border_color1;
  }
  .choice_com {
    height: inherit;
    width: 50%;
    line-height: px2rem(100);
    text-align: center;
    // background: blueviolet;
  }
  .choice_one {
    color: $color1;
  }
  .choice_two {
    color: $color8;
  }
}
</style>
