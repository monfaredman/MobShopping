<template>
    <div class="AppMobile">
      <div class="AppMobile-title">
        <ul class="tab-bar">
          <a class="tab wave dark">APPLE</a>
          <a class="tab wave dark">SAMSUNG</a>
          <a class="tab wave dark">HUAWEI</a>
          <a class="tab wave dark">SONY</a>
          <a class="tab wave dark">NOKIA</a>
          <div class="indicator"></div>
        </ul>
      </div>
      <div class="AppMobile-cards">
        <div v-for="item in 25" :key="item" class="card">
          <router-link to="/mobile/apple/iphone12/payment"></router-link>
          <div class="card-header">
            <a href=""
              ><img
                class="card-img img-fluid "
                src="../../assets/Image/img-24.jpg"
                alt=""
            /></a>
          </div>
          <div class="card-body">
            <h6>
              iPhone 12 Pro Max A2412
            </h6>
          </div>
          <div class="card-footer">
            <h5>۴۵,۵۰۰ تومان</h5>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AppFilter1 from "./Index/components/AppFilter1";
import AppFilter2 from "./Index/components/AppFilter2";
export default {
  data() {
    return {
      selectedComponent: "app-filter-1"
    };
  },

  components: {
    appFilter1: AppFilter1,
    appFilter2: AppFilter2
  }
};
</script>

<style></style>
