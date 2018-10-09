<template>
  <div class="item_box">
    <div class="left"></div>
    <div class="right"></div>
    <ul class="item_box_container">
      <router-link tag="li" :to="item.path" class="item_content" v-for="item of listPic" :key="item.id">
        <div class="item_img_wrap">
          <img class="item_img" :src="item.imgUrl" alt="">
        </div>
        <p class="item_title">{{item.title}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ItemBox',
  data () {
    return {
      listPic: [
        {imgUrl: '/static/首页icons/公告通知@2x.png', id: 1, path: '/notice', title: '公司通告'},
        {imgUrl: '/static/首页icons/进店拜访@2x.png', id: 2, path: '/enter/plan_in', title: '进店拜访'},
        {imgUrl: '/static/首页icons/电话订单@2x.png', id: 3, path: '/out', title: '电话订单'},
        {imgUrl: '/static/首页icons/订单状态@2x.png', id: 4, path: '/static', title: '订单状态'},
        {imgUrl: '/static/首页icons/培训资料@2x.png', id: 5, path: '/123', title: '培训资料'},
        {imgUrl: '/static/首页icons/消息中心@2x.png', id: 6, path: '/Chat', title: '消息中心'},
        {imgUrl: '/static/首页icons/新增门店@2x.png', id: 7, path: '/123', title: '新增门店'},
        {imgUrl: '/static/首页icons/数据同步@2x.png', id: 8, path: '/123', title: '数据同步'},
        {imgUrl: '/static/首页icons/数据同步@2x.png', id: 9, path: '/testvuex', title: 'vuex测试页'}

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
.item_box {
  position: relative;
  .left {
    @include index_item_box_le_ri;
    left: 0;
  }
  .right {
    @include index_item_box_le_ri;
    right: 0;
  }
}

.item_box_container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  .item_content {
    box-sizing: border-box;
    height: px2rem(270);
    flex: 1 1 33.3%;
    text-align: center;
    border: px2rem(1) solid $border_color1;
    border-bottom-color: transparent;
    border-right-color: transparent;
    .item_img_wrap {
      height: px2rem(62);
      width: px2rem(62);
      margin: px2rem(72) auto px2rem(36);
      .item_img {
        height: 100%;
      }
    }
    .item_title {
      font-size: px2rem(24);
      color: $num_color;
    }
  }
}
</style>
