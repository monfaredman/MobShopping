<template>
  <div class="bag-section">
    <div class="bag-title">
      <div class="section-title-in">
        <p class="top-card ">کیف،کاور و گلس</p>
        <img class="new-img" src="../../assets/Image/shopping-bag.png" alt="" />
      </div>
    </div>
    <div class="bag-cards">
      <div
        v-for="item in 5"
        :key="item"
        class="card  col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2"
      >
        <div class="card-header">
          <a href=""
            ><img
              class="card-img img-fluid "
              src="../../assets/Image/img-30.jpg"
              alt=""
          /></a>
        </div>
        <div class="card-body">
          <h6>
            کاور جوی روم مدل JR-BP273 مناسب برای گوشی موبایل اپل iPhone 6 Plus
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
