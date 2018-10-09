<template>
  <div>
    <com-header v-bind:header="header" url="/confirm"></com-header>
    <search></search>
    <!-- 选择路由 -->
    <div class="choice_rout">
      <ul>
        <router-link tag="li" :to="item.url" :key="item.id" class="swi_rout" v-for="(item,index) in dropNavLists" @click="reds(index)" :class="{red:changedRed == index}">{{item.title}}</router-link>
      </ul>
    </div>
    <div class="h84">
      <span class="le">125478&nbsp;/ &nbsp; </span>
      <span class="le">12546</span>
      <span class="ri">图</span>
      <span class="ri">宝洁&nbsp;</span>
      <span class="ri">食品&nbsp;/&nbsp;</span>
      <span class="ri">洗护&nbsp;/&nbsp;</span>
    </div>
    <div class="shu_line"></div>

    <!-- 子路由模板 -->
    <router-view></router-view>
  </div>

</template>

<script>
import ComHeader from '@/components/header.vue'
import Search from '@/components/order/search.vue'
// import axios from 'axios'
export default {
  name: 'dorp',
  data () {
    return {
      header: {
        title: '下单',
        confirm: '购物车'
      },
      dropNavLists: [
        {title: '促销', id: 1, url: '/drop/drop_one'},
        {title: '全部', id: 2, url: '/drop/drop_two'},
        {title: 'A类', id: 3, url: '/drop/drop_one'},
        {title: 'B类', id: 4, url: '/drop/drop_two'},
        {title: 'C类', id: 5, url: '/drop/drop_one'},
        {title: 'D类', id: 6, url: '/drop/drop_two'}
      ],
      changedRed: 0
    }
  },
  components: {
    ComHeader,
    Search
  },
  methods: {
    reds: function (index) {
      console.log(index)
      this.changedRed = index
    }
  },
  computed: {

  },
  created () {
    // console.log(this.$store.state.dropList)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';

// 点击当前时，显示为红色
.red {
  color: red;
}

// 选择路由
.choice_rout {
  box-sizing: border-box;
  height: px2rem(90);
  width: px2rem(750);
  padding: 0 px2rem(28);
  border: px2rem(1) solid $border_color1;
  font-size: px2rem(28);
  color: $num_color;
  .swi_rout {
    float: left;
    width: px2rem(100);
    height: px2rem(40);
    margin-top: px2rem(25);
    line-height: px2rem(40);
    text-align: center;
    border-right: px2rem(1) solid $border_color1;
    &:last-child {
      border: none;
    }
  }
}

// 分类
.h84 {
  box-sizing: border-box;
  height: px2rem(84);
  line-height: px2rem(84);
  width: px2rem(750);
  padding: 0 px2rem(28);
  font-size: px2rem(28);
  color: $border_color1;
  .le {
    float: left;
  }
  .ri {
    float: right;
  }
}
//竖线
.shu_line {
  width: px2rem(680);
  height: px2rem(1);
  margin-left: px2rem(28);
  background: $border_color1;
}
</style>
