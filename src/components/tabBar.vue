<template>
  <div class="tabBar">
    <van-tabbar v-model="tabActive" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/discover"
        >发现</van-tabbar-item
      >
      <van-tabbar-item icon="friends" replace to="/my">我的</van-tabbar-item>
      <van-tabbar-item icon="setting" replace to="/setting"
        >设置</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabActive: 0
    };
  }
};
</script>
<style lang="less" scoped></style>
