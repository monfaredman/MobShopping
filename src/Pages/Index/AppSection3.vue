<template>
  <div class="Bestselling-section">
    <div class="Bestselling-title">
      <p>پرفروش ترین محصولات</p>
      <img class="img-fluid" src="../../assets/Image/bestsell.png" alt="" />
    </div>
    <div class="Bestselling-cards">
      <div v-for="item in 6" :key="item" class="card">
        <div class="card-header">
          <a href=""
            ><img
              class="card-img img-fluid "
              src="../../assets/Image/img-22.jpg"
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
export default {};
</script>
<style></style>
