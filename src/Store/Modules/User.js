import Vue from 'vue';

const state = {

};


const getters = {

};

const mutations = {

};

const actions = {
  RegisterUser(context, registerData) {
    Vue.http.post('users/',registerData)
      .then(response => {
        if (response.status == 201) {
          console.log(response);
          alert("ثبت نام با موفقیت انجام شد");
        }
        console.log(response);
      }, data => {
        console.log(data);
      });
  },
  LoginUser(context, loginData) {
    Vue.http.post('users/', loginData).then(response => {
      console.log(response);
      if (response.body.result == "NotFound") {
        alert('کاربری با مشخصات وارد شده یافت نشد');
      }

      if (response.body.result == "Done") {
        context.commit("SetAuthCookie", response);
        context.commit("SetUserFullName", response.body.user.name + " " + response.body.user.family);
        context.commit("SetUserAuthenticated", true);
        router.push('/');
      }

    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
