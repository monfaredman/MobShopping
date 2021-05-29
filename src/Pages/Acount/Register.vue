<template>
  <div class="container register">
    <div class="register-in">
      <div class=" register-box">
        <form action="" class="form-group ">
          <div class=" register-title"><h2>ثبت‌نام</h2></div>
          <div class="form-group">
            <label class=""><h6 class="">نام کاربری</h6></label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              @input="$v.name.$touch()"
              :class="{ invalid: $v.name.$error }"
            />
            <p v-if="!$v.name.required && $v.name.$dirty">
              لطفا نام کاربری را وارد کنید
            </p>
            <label><h6>آدرس ایمیل</h6></label>
            <input
              type="text"
              class="form-control"
              v-model="email"
              @input="$v.email.$touch()"
              :class="{ invalid: $v.email.$error }"
            />
            <p v-if="!$v.email.email">
              ایمیل وارد شده معتبر نمی باشد
            </p>
            <p v-if="!$v.email.required && $v.email.$dirty">
              لطفا ایمیل را وارد کنید
            </p>
            <p v-if="!$v.email.maxLength">
              ایمیل کاربر نمیتواند بیشتر از{{ $v.email.$params.maxLength.max }}
              کاراکتر داشته باشد
            </p>
            <label><h6>کلمه عبور</h6></label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              @input="$v.password.$touch()"
              :class="{ invalid: $v.password.$error }"
            />
            <p v-if="!$v.password.required && $v.password.$dirty">
              لطفا کلمه عبور را وارد کنید
            </p>
            <p v-if="!$v.password.minLength">
              کلمه عبور باید حداقل شامل
              {{ $v.password.$params.minLength.min }} کاراکتر باشد
            </p>
            <label><h6>تکرار کلمه عبور</h6></label>
            <input
              type="password"
              class="form-control"
              v-model="rePassword"
              @input="$v.rePassword.$touch()"
              :class="{ invalid: $v.rePassword.$error }"
            />
            <p v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty">
              کلمه عبور مغایرت دارد
            </p>
            <div>
              <div>
                <button
                  class="btn btn-success btn-block"
                  @click.prevent="RegisterUser()"
                  :disabled="$v.$invalid"
                >
                  ایجاد حساب
                </button>
                <router-link
                  tag="button"
                  to="/login"
                  class="btn btn-success btn-block my-3"
                >
                  ورود
                </router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
      const RegisterData = {
        name: this.name,
        email: this.email,
        password: this.password,
        rePassword: this.rePassword
      };
      this.$store.dispatch("RegisterUser", RegisterData);
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email,
      maxLength: maxLength(20)
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

<style></style>
