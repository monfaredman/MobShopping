import Index from "./Pages/Index/Index.vue";

var AppMobile = resolve => {
  require.ensure(["./Pages/Mobiles/AppMobile.vue"], () => {
    resolve(require("./Pages/Mobiles/AppMobile.vue"));
  });
};
var AppJanebi = resolve => {
  require.ensure(["./Pages/LavazemJanebi/AppJanebi.vue"], () => {
    resolve(require("./Pages/LavazemJanebi/AppJanebi.vue"));
  });
};
var Apple = resolve => {
  require.ensure(["./Pages/phones/Apple/Apple.vue"], () => {
    resolve(require("./Pages/phones/Apple/Apple.vue"));
  });
};
var Sumsong = resolve => {
  require.ensure(["./Pages/phones/Sumsong/Sumsong.vue"], () => {
    resolve(require("./Pages/phones/Sumsong/Sumsong.vue"));
  });
};
var Iphone12 = resolve => {
  require.ensure(["./Pages/phones/Apple/Iphone12.vue"], () => {
    resolve(require("./Pages/phones/Apple/Iphone12.vue"));
  });
};
var Login = resolve => {
  require.ensure(["./Pages/Acount/Login.vue"], () => {
    resolve(require("./Pages/Acount/Login.vue"));
  });
};
var Register = resolve => {
  require.ensure(["./Pages/Acount/Register.vue"], () => {
    resolve(require("./Pages/Acount/Register.vue"));
  });
};
var Payment = resolve => {
  require.ensure(["./Pages/Payment/Payment.vue"], () => {
    resolve(require("./Pages/Payment/Payment.vue"));
  });
};
var FinalPayment = resolve => {
  require.ensure(["./Pages/Payment/FinalPayment.vue"], () => {
    resolve(require("./Pages/Payment/FinalPayment.vue"));
  });
};
var NotFound404 = resolve => {
  require.ensure(["./Pages/404/NotFound404.vue"], () => {
    resolve(require("./Pages/404/NotFound404.vue"));
  });
};
var AboutUs = resolve => {
  require.ensure(["./Pages/AboutUs/AboutUs.vue"], () => {
    resolve(require("./Pages/AboutUs/AboutUs.vue"));
  });
};

export const Routes = [
  { path: "/", component: Index },
  {
    path: "/mobile",
    component: AppMobile
  },
  { path: "/janebi", component: AppJanebi },
  { path: "/mobile/apple", component: Apple },
  { path: "/sumsong", component: Sumsong, alias: "/mobile/apple" },
  { path: "/mobile/apple/iphone12", component: Iphone12 },

  { path: "/login", component: Login },
  { path: "/register", component: Register },

  {
    path: "/mobile/apple/iphone12/payment",
    component: Payment
  },
  {
    path: "/mobile/apple/iphone12/payment/finalpayment",
    component: FinalPayment
  },
  {
    path: "/notfound404",
    component: NotFound404
  },
  {
    path: "/aboutus",
    component: AboutUs
  },
  { path: "/404/", redirect: "/notfound404" },
  { path: "*", redirect: "/404/" }
];
