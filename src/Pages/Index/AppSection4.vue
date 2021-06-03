<template>
  <div class="H-section">
    <div class="H-title">
      <div class="H-title-in">
        <p>هدفون،هدست وهندزفری</p>
        <img class="img-fluid" src="../../assets/Image/charger.png" alt="" />
      </div>
    </div>
    <div class="H-cards">
      <div
        v-for="item in 5"
        :key="item"
        class="card col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2"
      >
        <div class="card-header">
          <img
            class="card-img img-fluid "
            src="../../assets/Image/img-31.jpg"
            alt=""
          />
        </div>
        <div class="card-body">
          <h6>
            هندزفری مدل RT-P3
          </h6>
        </div>
        <div class="card-footer">
          <h5>۳۹,۵۰۰ تومان</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
