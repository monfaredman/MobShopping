<template>
  <div class="container register m-auto">
    <div class="col-7 register-in">
      <form action="" class="form-group ">
        <div class="flex-column align-content-center">
          <div class="mt-3"><h2 class="text-center">ثبت‌نام</h2></div>
          <div class="mt-4"><h6 class="text-right">نام کاربری</h6></div>
          <div class="form-group flex-column align-content-center">
            <input type="text" class="form-control" v-model="name"
            @input="$v.name.$touch()" :class="{ invalid: $v.name.$error }" />
            <p class="text-danger" v-if="!$v.name.required && $v.name.$dirty">
              لطفا نام کاربری را وارد کنید
            </p>
            <div class="mt-3"><h6 class="text-right">آدرس ایمیل</h6></div>
            <input
              type="email"
              class="form-control"
              v-model="email"
              @input="$v.email.$touch()"
              :class="{ invalid: $v.email.$error }"
            />
            <p class="text-danger" v-if="!$v.email.email">
              ایمیل وارد شده معتبر نمی باشد
            </p>
            <p class="text-danger" v-if="!$v.email.unique && $v.email.$dirty">
              ایمیل وارد شده تکراری میباش
            </p>
            <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">
              لطفا ایمیل را وارد کنید
            </p>
            <p class="text-danger" v-if="!$v.email.maxLength">
              ایمیل کاربر نمیتواند بیشتر از{{ $v.email.$params.maxLength.max }}
              کاراکتر داشته باشد
            </p>
            <div class="mt-3"><h6 class="text-right">کلمه عبور</h6></div>
            <input type="password" class="form-control" v-model="password" />
            <p
              class="text-danger"
              v-if="!$v.password.required && $v.password.$dirty"
            >
              لطفا کلمه عبور را وارد کنید
            </p>
            <p class="text-danger" v-if="!$v.password.minLength">
              کلمه عبور باید حداقل شمال
              {{ $v.password.$params.minLength.min }} کاراکتر باشد
            </p>
            <div class="mt-3"><h6 class="text-right">تکرار کلمه عبور</h6></div>
            <input type="password" class="form-control" v-model="rePassword"   @input="$v.rePassword.$touch()"
                :class="{invalid:$v.rePassword.$error}"/>
            <p
              class="text-danger"
              v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty"
            >
              کلمه عبور مغایرت دارد
            </p>
            <div class="mt-2 align-item-center">
              <div class="mt-5">
                <button
                  type="submit"
                  class="btn btn-success btn-block"
                  @click.prevent="RegisterUser()"
                  :disabled="$v.$invalid"
                >
                  ایجاد حساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  methods: {
    RegisterUser() {
      const register = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("RegisterUser", register);
    }
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
      maxLength: maxLength(100),
      unique: function(val) {
        if (val === "") return true;

        return this.$http
          .get("users/", {
            params: { email: val }
          })
          .then(
            response => {
              console.log(response);
              return !response.body.isExist;
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    password: {
      minLength: minLength(6),
      required
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}

.invalidtwo {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}

.register {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 100px;
}

.register-in {
  height: 590px;
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
