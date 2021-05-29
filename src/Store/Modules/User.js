import Vue from "vue";
import axios from "axios";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  RegisterUser(context, RegisterData) {
    axios
      .post("https://6070339a85c3f0001746f9b5.mockapi.io/users", RegisterData)
      .then(function(response) {
        if ((response.status = 200)) {
          alert("ثبت نام با موفقیت انجام شد");
        }
        console.log(response);
      });
  },
  LoginUser(context, LoginData) {
    axios
      .post("https://6070339a85c3f0001746f9b5.mockapi.io/users", LoginData)
      .then(response => {
        if ((response.status = 200)) {
          alert("ورود با موفقیت انجام شد");
        }
        console.log(response);
        // if (response.body.result == "NotFound") {
        //   alert("کاربری با مشخصات وارد شده یافت نشد");
        // }

        // if (response.body.result == "Done") {
        //   context.commit("SetAuthCookie", response);
        //   context.commit(
        //     "SetUserFullName",
        //     response.body.user.name + " " + response.body.user.family
        //   );
        //   context.commit("SetUserAuthenticated", true);
        //   router.push("/");
        // }
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
