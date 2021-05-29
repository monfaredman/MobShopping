// Main
import Vue from "vue";
import App from "./App.vue";
import { store } from "./Store/Store";
import axios from "axios";

// Vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Pages
import Index from "./Pages/Index/Index.vue";
import AppMobile from "./Pages/Mobiles/AppMobile.vue";
import AppJanebi from "./Pages/LavazemJanebi/AppJanebi.vue";
import NotFound404 from "./Pages/404/NotFound404.vue";
import Login from "./Pages/Acount/Login.vue";
import Register from "./Pages/Acount/Register.vue";
import AboutUs from "./Pages/AboutUs/AboutUs.vue";
Vue.component("index", Index);
Vue.component("app-mobile", AppMobile);
Vue.component("app-janebi", AppJanebi);
Vue.component("not-found-404", NotFound404);
Vue.component("login", Login);
Vue.component("register", Register);
Vue.component("aboutUs", AboutUs);

// shared
import AppFooter from "./Pages/Shared/AppFooter.vue";
import AppHeader from "./Pages/Shared/AppHeader.vue";
Vue.component("appFooter", AppFooter);
Vue.component("appHeader", AppHeader);

// Phone brands
import Apple from "./Pages/phones/Apple/Apple.vue";
import Sumsong from "./Pages/phones/Sumsong/Sumsong.vue";
Vue.component("apple", Apple);
Vue.component("sumsong", Sumsong);

// Phones
import Iphone12 from "./Pages/phones/Apple/Iphone12.vue";
Vue.component("iphone-12", Iphone12);

// VueRouter
import VueRouter from "vue-router";
import { Routes } from "./Routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    router.beforeEach((to, from, next) => {});
  }
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
