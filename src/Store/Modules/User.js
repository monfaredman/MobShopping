import Vue from 'vue';

const state = {

};


const getters = {

};

const mutations = {

};

const actions = {
  // RegisterUser(context) {
  //   axios.post('https://test2-dbcf6-default-rtdb.firebaseio.com/User')
  //     .then(function(response)  {
  //       console.log(response)})
  //       .catch(function(error) {
  //         console.log(error)})

  // },
  // LoginUser(context, loginData) {
  //   axios.post('https://test2-dbcf6-default-rtdb.firebaseio.com/User', loginData).then(response => {
  //     console.log(response);
  //     if (response.body.result == "NotFound") {
  //       alert('کاربری با مشخصات وارد شده یافت نشد');
  //     }

  //     if (response.body.result == "Done") {
  //       context.commit("SetAuthCookie", response);
  //       context.commit("SetUserFullName", response.body.user.name + " " + response.body.user.family);
  //       context.commit("SetUserAuthenticated", true);
  //       router.push('/');
  //     }

  //   });
  // },
};

export default {
  state,
  getters,
  mutations,
  actions
};



