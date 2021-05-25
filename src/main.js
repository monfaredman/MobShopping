// Main
import Vue from "vue";
import App from "./App.vue";
import { store } from "./Store/Store";
// Vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
// Pages
import AppHome from "./components/pages/Index/AppHome.vue";
import AppMobile from "./components/pages/AppMobile.vue";
import AppJanebi from "./components/pages/AppJanebi.vue";
import AppNotFound from "./components/pages/AppNotFound.vue";
import Login from "./components/pages/Acount/Login.vue";
import Register from "./components/pages/Acount/Register.vue";
Vue.component("app-home", AppHome);
Vue.component("app-mobile", AppMobile);
Vue.component("app-janebi", AppJanebi);
Vue.component("app-not-found", AppNotFound);
Vue.component("login", Login);
Vue.component("register", Register);
// shared
import AppFooter from "./components/shared/AppFooter.vue";
import AppHeader from "./components/shared/AppHeader.vue";
Vue.component("app-footer", AppFooter);
Vue.component("app-header", AppHeader);
// Phone brands
import Apple from "./components/phones/Apple.vue";
import Samsong from "./components/phones/Samsong.vue";
Vue.component("app-apple", Apple);
Vue.component("app-samsong", Samsong);
// Phones
import Iphone12 from "./components/phones/Apple/Iphone12.vue";
Vue.component("app-iphone-12", Iphone12);
// VueRouter
import VueRouter from "vue-router";
import { Routes } from "./Routes";

Vue.use(VueRouter);
const router = new VueRouter({ routes: Routes, mode: "history" });
// VueResource
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "https://6070339a85c3f0001746f9b5.mockapi.io/";

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
