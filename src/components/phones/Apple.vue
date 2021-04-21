<template> 
<div class="col-12">
  <span class="breadcrumb"> 
  <li class="breadcrumb-item"><router-link to="/"><a href="" >صفحه اصلی</a></router-link></li>
  <li class="breadcrumb-item"><router-link to="/mobile"><a href="" >موبایل</a></router-link> </li>
  <li class="breadcrumb-item"><router-link to="/apple"><a href="" >اپل</a></router-link> </li>
</span>
<div class="d-flex justify-content-start bg-light">
<li class="list-unstyled"><p>مرتب سازی بر اساس:</p></li>
          <a class="btn btn-success m-auto" @click="selectedComponent='app-filter-1'">پرفروش‌ترین</a>
          <a class="btn btn-success m-auto" @click="selectedComponent='app-filter-2'">مرتبط‌ترین</a>
          <a class="btn btn-success m-auto" @click="selectedComponent='app-filter-1'">پربازدیدترین</a>
          <a class="btn btn-success m-auto" @click="selectedComponent='app-filter-2'">جدیدترین</a>
          <a class="btn btn-success m-auto" @click="selectedComponent='app-filter-1'">ارزان‌ترین</a>
</div>

          <keep-alive>
            <component :is="selectedComponent">
              <template v-if="selectedComponent=='app-filter-1'">
              </template>

              <template v-if="selectedComponent=='app-filter-2'">
              </template>
            </component>
          </keep-alive>
    </div>
</template>

<script>
import AppFilter1 from "../pages/Index/components/AppFilter1";
import AppFilter2 from "../pages/Index/components/AppFilter2";
export default {
  data() {
    return {
      selectedComponent: "app-filter-1"
    };
  },

  components: {
    appFilter1: AppFilter1,
    appFilter2: AppFilter2,
  }
};
</script>

<style>
    #card-one:hover {
  background-color: white;
  animation-name: zoom;
  animation-duration: 999999999900000s;
  animation-delay: 0s;
  box-shadow: 0px -1px 35px -6px ;
}
</style>
