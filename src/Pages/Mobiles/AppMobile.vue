<template>
  <div class="AppMobile">
    <div class="AppMobile-title">
      <ul class="tab-bar">
        <router-link tag="li" to="/mobile/apple">
          <a class="tab wave dark">APPLE</a>
        </router-link>
        <router-link tag="li" to="/mobile/apple">
          <a class="tab wave dark">SAMSUNG</a>
        </router-link>
        <router-link tag="li" to="/mobile/apple">
          <a class="tab wave dark">HUAWEI</a>
        </router-link>
        <router-link tag="li" to="/mobile/apple">
          <a class="tab wave dark">SONY</a>
        </router-link>
        <router-link tag="li" to="/mobile/apple">
          <a class="tab wave dark">NOKIA</a>
        </router-link>
      </ul>
    </div>
    <div class="AppMobile-cards">
      <div v-for="item in 25" :key="item" class="card">
        <router-link to="/mobile/apple/iphone12">
          <div class="card-header">
            <a href=""
              ><img
                class="card-img img-fluid "
                src="../../assets/Image/img-21.jpg"
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
        </router-link>
      </div>
    </div>
    <div class="wrapper">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.wrapper {
  height: 20vh;
  display: flex;
  justify-content: center;
  margin-bottom: -46px;
  align-items: center;
}

.page-link {
  position: relative;
  display: block;
  color: #673ab7 !important;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #673ab7 !important;
}

.page-link:hover {
  z-index: 2;
  color: #fff !important;
  background-color: #673ab7;
  border-color: #024dbc;
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: none;
}
</style>
