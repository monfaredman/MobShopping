import AppHome from "./components/pages/Index/AppHome.vue";

// import AppMobile from "./components/pages/AppMobile.vue";
// import AppJanebi from "./components/pages/AppJanebi.vue";
// import Apple from "./components/phones/Apple.vue";
// import Samsong from "./components/phones/Samsong.vue";
// import Iphone12 from "./components/phones/Apple/Iphone12.vue";
// import Login from "./components/pages/Acount/Login.vue";
// import Register from "./components/pages/Acount/Register.vue";
// import Payment from "./components/pages/Payment/Payment.vue";
// import FinalPayment from "./components/pages/Payment/FinalPayment.vue";
var AppMobile = resolve => {
  require.ensure(["./components/pages/AppMobile.vue"], () => {
    resolve(require("./components/pages/AppMobile.vue"));
  });
};
var AppJanebi = resolve => {
  require.ensure(["./components/pages/AppJanebi.vue"], () => {
    resolve(require("./components/pages/AppJanebi.vue"));
  });
};
var Apple = resolve => {
  require.ensure(["./components/phones/Apple.vue"], () => {
    resolve(require("./components/phones/Apple.vue"));
  });
};
var Samsong = resolve => {
  require.ensure(["./components/phones/Samsong.vue"], () => {
    resolve(require("./components/phones/Samsong.vue"));
  });
};
var Iphone12 = resolve => {
  require.ensure(["./components/phones/Apple/Iphone12.vue"], () => {
    resolve(require("./components/phones/Apple/Iphone12.vue"));
  });
};
var Login = resolve => {
  require.ensure(["./components/pages/Acount/Login.vue"], () => {
    resolve(require("./components/pages/Acount/Login.vue"));
  });
};
var Register = resolve => {
  require.ensure(["./components/pages/Acount/Register.vue"], () => {
    resolve(require("./components/pages/Acount/Register.vue"));
  });
};
var Payment = resolve => {
  require.ensure(["./components/pages/Payment/Payment.vue"], () => {
    resolve(require("./components/pages/Payment/Payment.vue"));
  });
};
var FinalPayment = resolve => {
  require.ensure(["./components/pages/Payment/FinalPayment.vue"], () => {
    resolve(require("./components/pages/Payment/FinalPayment.vue"));
  });
};
var NotFound404 = resolve => {
  require.ensure(
    ["./components/pages/Index/components/NotFound404.vue"],
    () => {
      resolve(require("./components/pages/Index/components/NotFound404.vue"));
    }
  );
};

export const Routes = [
  { path: "/", component: AppHome },
  {
    path: "/mobile",
    component: AppMobile
  },
  { path: "/janebi", component: AppJanebi },
  { path: "/mobile/apple", component: Apple },
  { path: "/samsong", component: Samsong, alias: "/mobile/apple" },
  { path: "/mobile/apple/iphone12", component: Iphone12 },

  { path: "/login", component: Login },
  { path: "/register", component: Register },

  {
    path: "/mobile/apple/iphone12/payment",
    component: Payment,
    beforeRouteLeave(to, from, next) {
      alert("Are You Sure?");
    }
  },
  {
    path: "/mobile/apple/iphone12/payment/finalpayment",
    component: FinalPayment
  },
  {
    path: "/notfound404",
    component: NotFound404
  },
  { path: "/404/", redirect: "/notfound404" },
  { path: "*", redirect: "/404/" }
];
