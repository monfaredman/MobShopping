import AppHome from "./components/pages/Index/AppHome.vue";
import AppMobile from "./components/pages/AppMobile.vue";
import AppJanebi from "./components/pages/AppJanebi.vue";
import Apple from "./components/phones/Apple.vue";
import Samsong from "./components/phones/Samsong.vue";
import Iphone12 from "./components/phones/Apple/Iphone12.vue";
import Login from "./components/pages/Acount/Login.vue";
import Register from "./components/pages/Acount/Register.vue";


export const Routes = [
  { path: '/', component: AppHome },
  { path: '/mobile', component: AppMobile },
  { path: '/apple', component: Apple},
  { path: '/iphone12', component: Iphone12 },
  { path: '/samsong', component: Samsong },
  { path: '/janebi', component: AppJanebi },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/404/', redirect:'/' },
  { path: '*', redirect: '/404/' },
];