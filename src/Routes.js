import AppHome from "./components/pages/Index/AppHome.vue";
import AppMobile from "./components/pages/AppMobile.vue";
import AppJanebi from "./components/pages/AppJanebi.vue";
import Apple from "./components/phones/Apple.vue";
import Samsong from "./components/phones/Samsong.vue";
import Iphone12 from "./components/phones/Apple/Iphone12.vue";
import Login from "./components/pages/Acount/Login.vue";
import Register from "./components/pages/Acount/Register.vue";
import Payment from "./components/pages/Payment/Payment.vue";
import FinalPayment from "./components/pages/Payment/FinalPayment.vue";

export const Routes = [
  { path: "/", component: AppHome },
  { path: "/mobile", component: AppMobile },
  { path: "/mobile/apple", component: Apple },
  { path: "/mobile/apple/iphone12", component: Iphone12 },
  { path: "/samsong", component: Samsong },
  { path: "/janebi", component: AppJanebi },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/mobile/apple/iphone12/payment", component: Payment },
  {
    path: "/mobile/apple/iphone12/payment/finalpayment",
    component: FinalPayment
  },
  { path: "/404/", redirect: "/" },
  { path: "*", redirect: "/404/" }
];
