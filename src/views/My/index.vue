<template>
  <div class="my">
    <van-nav-bar title="充值"
      left-text="返回"
      right-text="按钮"
      left-arrow />
    <van-row>
      <van-col span="12">
        <p class="investMoney">金额</p>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field @blur="show = true"
            clickable
            ref="inputenter"
            :value="value"
            :autofocus="autofocus"
            @input="InputValue"
            @click="focusNum"
            type="text"
            @touchstart.native.stop="show = true"
            placeholder="请输入用户名" />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-number-keyboard :show="show"
      extra-key="."
      close-button-text="完成"
      @blur="show = true"
      @input="onInput"
      @delete="onDelete" />
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      autofocus: true,
      show: false,
      value: "123456"
    };
  },
  methods: {
    focusNum() {
      //   document.activeElement.blur();
    },
    InputValue(val) {},
    onInput(val) {
    let Value =  this.value.split('')
    Value.push(val)
    this.value = Value.join('')
    },
    //
    onDelete() {
      function getCursortPosition(textDom) {
        var cursorPos = 0;
        if (document.selection) {
          // IE Support
          textDom.focus();
          var selectRange = document.selection.createRange();
          selectRange.moveStart("character", -textDom.value.length);
          cursorPos = selectRange.text.length;
        } else if (textDom.selectionStart || textDom.selectionStart == "0") {
          // Firefox support
          cursorPos = textDom.selectionStart;
        }
        return cursorPos;
      }

      function setCaretPosition(textDom, pos) {
        if (textDom.setSelectionRange) {
          // IE Support
          textDom.focus();
          textDom.setSelectionRange(pos, pos);
        } else if (textDom.createTextRange) {
          // Firefox support
          var range = textDom.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
        }
      }
      let aa = this.$refs.inputenter.$el;
      let bb = aa.getElementsByClassName("van-field__control")[0];
      let cc = getCursortPosition(bb);
      console.log(cc);
      if(cc==0){
          setCaretPosition(bb, 0);
          return
      }
      let dd = this.value.split('')
      dd.splice(cc-1,1)
      this.value = dd.join('')
      setTimeout(() => {
        setCaretPosition(bb, cc-1);
      }, 200);
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
