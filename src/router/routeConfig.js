const Login = () => import(/* webpackChunkName: "login" */ "@/views/Login");

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const Discover = () =>
  import(/* webpackChunkName: "discover" */ "@/views/Discover");
const My = () => import(/* webpackChunkName: "my" */ "@/views/My");
const Setting = () =>
  import(/* webpackChunkName: "setting" */ "@/views/Setting");

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/discover",
    name: "discover",
    component: Discover
  },
  {
    path: "/my",
    name: "my",
    component: My,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting
  }
];

export default routes;
