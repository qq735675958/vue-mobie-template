<template>
  <div class="my">
    <van-nav-bar title="充值" left-text="返回" right-text="按钮" left-arrow />
    <van-row>
      <van-col span="12">
        <p class="investMoney">充值金额</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12">
        <van-cell-group>
          <van-field
            ref="inputenter"
            :autofocus="autofocus"
            @input="InputValue"
            v-model="value"
            @focus="focusNum"
            type="number"
            placeholder="请输入用户名"
          />
          <!-- <input type="text"
            @focus="focusNum"
            id="aaa"
            v-model="value" /> -->
        </van-cell-group>
      </van-col>
    </van-row>
    <van-number-keyboard
      :show="show"
      extra-key="."
      close-button-text="完成"
      @blur="show = true"
      v-model="value"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      autofocus: true,
      show: true,
      value: "",
      value1: ""
    };
  },
  methods: {
    focusNum() {
      //   document.activeElement.blur();
    },
    InputValue(val) {
      //   console.log(val);
      console.log(val.length);
    },
    onInput(val) {
      console.log(val);
    },
    onDelete(val) {
      this.value = this.value.slice(0, this.value.length - 1);
      this.$refs.inputenter.focus();
      console.log(this.$refs.inputenter);
      this.$refs.inputenter.focus();
    }
  }
};
</script>
<style lang="less" scoped>
.investMoney {
  padding: 10px 0;
  font-size: 14px;
}
</style>
