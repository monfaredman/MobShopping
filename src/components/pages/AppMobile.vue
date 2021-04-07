<template>
<div>
<app-bread-crumb></app-bread-crumb>
  <router-link to="/"><a href="" class="btn btn-primary">Home</a></router-link>
  <router-link to="/apple"><a href="" class="btn btn-primary">apple</a></router-link>
  <router-link to="/samsong"><a href="" class="btn btn-primary">samsong</a></router-link>
<section
      class="hot-section mt-5"
      id=""
      style="background-color:rgba(100, 108, 134, 0.26);"
    >
      <div class="container">
        <div class="mt-5 w-75 m-auto">
          <h5 class="top-card">mobiles</h5>
        </div>

        <div class="row justify-content-center">
          <router-link to="/iphone12"> <div class="text-center card">
            <div class="card-header">
              <a href=""
                ><img class="card-img img-fluid " src="../../assets/Image/img-8.jpg" alt=""
              /></a>
            </div>
            <div class="card-body">
              <h6>iPhone 11 A2223</h6>
            </div>
            <div class="card-footer">
              <h5>۲۷,۲۰۰,۰۰۰ تومان</h5>
            </div>
          </div>
</router-link>

          <div class="text-center card">
            <div class="card-header">
              <a href=""
                ><img class="card-img img-fluid " src="../../assets/Image/img-8.jpg" alt=""
              /></a>
            </div>
            <div class="card-body">
              <h6>iPhone 11 A2223</h6>
            </div>
            <div class="card-footer">
              <h5>۲۷,۲۰۰,۰۰۰ تومان</h5>
            </div>
          </div>

          <div class="text-center card">
            <div class="card-header">
              <a href=""
                ><img class="card-img img-fluid " src="../../assets/Image/img-8.jpg" alt=""
              /></a>
            </div>
            <div class="card-body">
              <h6>iPhone 11 A2223</h6>
            </div>
            <div class="card-footer">
              <h5>۲۷,۲۰۰,۰۰۰ تومان</h5>
            </div>
          </div>

          <div class="text-center card">
            <div class="card-header">
              <a href=""
                ><img class="card-img img-fluid " src="../../assets/Image/img-8.jpg" alt=""
              /></a>
            </div>
            <div class="card-body">
              <h6>iPhone 11 A2223</h6>
            </div>
            <div class="card-footer">
              <h5>۲۷,۲۰۰,۰۰۰ تومان</h5>
            </div>
          </div>

          <div class="text-center card">
            <div class="card-header">
              <a href=""
                ><img class="card-img img-fluid " src="../../assets/Image/img-8.jpg" alt=""
              /></a>
            </div>
            <div class="card-body">
              <h6>iPhone 11 A2223</h6>
            </div>
            <div class="card-footer">
              <h5>۲۷,۲۰۰,۰۰۰ تومان</h5>
            </div>
          </div>
        </div>
      </div>
    <router-view></router-view>
    </section>
</div>
</template>

<script>
import AppBreadCrumb from "../shared/AppBreadCrumb.vue";
export default {
  components: {
    appBreadCrumb: AppBreadCrumb,
  }
};
</script>

<style>

</style>
