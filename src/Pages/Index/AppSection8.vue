<template>
  <div class="newest-section">
    <div class="newest-title">
      <div class="section-title-in">
        <p class="top-card ">جدید ترین محصولات</p>
        <img class="new-img" src="../../assets/Image/img-32.png" alt="" />
      </div>
    </div>
    <div class="newest-cards">
      <div
        v-for="item in 6"
        :key="item"
        class="card col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2"
      >
        <router-link to="/mobile/apple/iphone12">
          <div class="card-header">
            <img
              class="card-img img-fluid "
              src="../../assets/Image/img-24.jpg"
              alt=""
            />
          </div>
          <div class="card-body">
            <h6>iPhone 12 Pro Max A2412</h6>
          </div>
          <div class="card-footer">
            <h5>۵۴,۹۹۰,۰۰۰ تومان</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
