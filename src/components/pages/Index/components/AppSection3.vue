<template>
  <div class="Bestselling-section">
    <div class="Bestselling-title">
      <p>کیف و کاور گوشی</p>
      <img class="img-fluid" src="../../../../assets/Image/img-32.png" alt="" />
    </div>
    <div class="Bestselling-cards">
      <div v-for="item in 6" :key="item" class="card">
        <div class="card-header">
          <a href=""
            ><img
              class="card-img img-fluid "
              src="../../../../assets/Image/img-24.jpg"
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
