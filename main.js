// Main
import Vue from "vue";
import App from "./App.vue";
// Pages
import AppHome from "./components/pages/Index/AppHome.vue";
import AppMobile from "./components/pages/AppMobile.vue";
import AppJanebi from "./components/pages/AppJanebi.vue";
import AppNotFound from "./components/pages/AppNotFound.vue";
import Login from "./components/pages/Login/Login.vue";
import SignUp from "./components/pages/Login/SignUp.vue";
Vue.component("app-home", AppHome);
Vue.component("app-mobile", AppMobile);
Vue.component("app-janebi", AppJanebi);
Vue.component("app-not-found", AppNotFound);
Vue.component("login", Login);
Vue.component("sign-up", SignUp);
// shared
import AppFooter from "./components/shared/AppFooter.vue";
import AppHeader from "./components/shared/AppHeader.vue";
Vue.component("app-footer", AppFooter);
Vue.component("app-header", AppHeader);
// Phone brands
import Apple from "./components/phones/Apple.vue"
import Samsong from "./components/phones/Samsong.vue"
Vue.component("app-apple", Apple);
Vue.component("app-samsong", Samsong);
// Phones
import Iphone12 from "./components/phones/Apple/Iphone12.vue";
Vue.component("app-iphone-12", Iphone12);
// VueRouter
import VueRouter from "vue-router";
import { Routes } from './Routes';
Vue.use(VueRouter);
const router = new VueRouter({ routes: Routes, mode: "history" });
// VueResource
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "https://test2-dbcf6-default-rtdb.firebaseio.com/"

Vue.http.interceptors.push((request, next) => {

  request.headers.set('Authentication', 'this is for auth');

  console.log(request);


    next(response => {
    console.log(response);
  });
});










new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
