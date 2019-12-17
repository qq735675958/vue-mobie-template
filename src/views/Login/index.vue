<template>
  <div class="login">
    <div class="login-box">
      <div class="user-avtor">
        <van-image
          round
          fit="cover"
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>

      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div>
        <van-row type="flex" justify="center">
          <van-col span="16">
            <van-button type="primary" size="large" @click="login"
              >登录</van-button
            >
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["set_user_info"]),
    login() {
      this.set_user_info("Token-----");
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  .login-box {
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .user-avtor {
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
