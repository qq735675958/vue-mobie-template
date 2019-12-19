import store from "@/store";
import router from "@/router";
import { Toast } from "vant";

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (store.state.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      Toast.fail("登录才能查看哦！");
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  Toast.clear();
});
