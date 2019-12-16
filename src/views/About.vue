<template>
  <div class="about">
    <van-loading color="#1989fa" />
    <van-button type="info" @click="pop">信息按钮</van-button>
    <van-button @touchstart.stop="show = true">
  弹出默认键盘
</van-button>
    <van-number-keyboard
  :show="show"
  extra-key="."
  close-button-text="完成"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
  </div>
</template>
<script>
import { Toast, Dialog, } from "vant";
export default {
  name: "hello",
  data() {
    return {
      show: true
    };
  },
  methods: {
    pop() {
      Dialog({ message: "提示" });
    },
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast('删除');
    }
  },
  mounted() {
    Toast("提示内容");
  }
};
</script>
