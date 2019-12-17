<template>
  <div class="setting">
    <van-nav-bar title="设置" left-text="返回" right-text="按钮" left-arrow />
    <div>
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link value="内容" />
    </div>
  </div>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {
      show: true
    };
  },
  methods: {}
};
</script>
