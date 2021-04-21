<template>
  <div class="container m-auto ligin">
    <div class="col-7 login-in">
      <form action="" class="form-group ">
        <div class="flex-column align-content-center">
          <div class="mt-3"><h2 class="text-center">ورود</h2></div>
          <div class="mt-5">
            <h5 class="text-center">اگر حساب کاربری دارید، لطفا وارد شوید</h5>
          </div>
          <div class="mt-5"><h6 class="text-right">آدرس ایمیل</h6></div>
          <div class="form-group flex-column align-content-center">
            <input type="email" class="form-control" v-model="email" /><br />
            <div class="mt-3"><h6 class="text-right">کلمه عبور</h6></div>
            <input
              type="password"
              class="form-control"
              v-model="password"
            /><br />
            <div class=" align-item-center">
              <div class="mt-4">
                <button type="submit" class="btn btn-success w-100">
                  ورود
                </button>
              </div>
              <div class="mt-1">
                <router-link to="/register" exact>
                  <button type="submit" class="btn btn-success  btn-block">
                    ایجاد حساب
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.ligin {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 100px;
}

.login-in {
  height: 500px;
  width: 560px;
  background: linear-gradient(rgb(57 43 85 / 0%), rgba(35, 43, 85, 0.95)),
    url(https://dl.dropboxusercontent.com/u/22006283/preview/codepen/clouds-cloudy-forest-mountain.jpg)
      no-repeat center center;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  border-top: solid 1px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.5s ease;
}
</style>
