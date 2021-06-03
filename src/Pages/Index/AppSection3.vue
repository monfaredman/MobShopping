<template>
  <div class="Bestselling-section">
    <div class="Bestselling-title">
      <div class="Bestselling-title-in">
        <p>پرفروش ترین محصولات</p>
        <img class="img-fluid" src="../../assets/Image/bestsell.png" alt="" />
      </div>
    </div>
    <div class="Bestselling-cards">
      <div
        v-for="item in 6"
        :key="item"
        class="card col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2"
      >
        <div class="card-header">
          <img
            class="card-img img-fluid "
            src="../../assets/Image/img-22.jpg"
            alt=""
          />
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
export default {};
</script>
<style></style>
