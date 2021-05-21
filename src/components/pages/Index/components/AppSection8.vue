<template>
    <div class="newest-section">
      <div class="newest-title">
        <p class="top-card ">جدید ترین محصولات</p>
        <img class="new-img" src="../../../../assets/Image/img-32.png" alt="" />
      </div>
      <div class="newest-cards">
        <div
          v-for="item in 6"
          :key="item"
          class="card"
        >
          <div class="card-header">
            <a href=""
              ><img
                class="card-img img-fluid "
                src="../../../../assets/Image/img-24.jpg"
                alt=""
            /></a>
          </div>
          <div class="card-body">
            <h6>iPhone 12 Pro Max A2412</h6>
          </div>
          <div class="card-footer">
            <h5>۵۴,۹۹۰,۰۰۰ تومان</h5>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>

</style>
