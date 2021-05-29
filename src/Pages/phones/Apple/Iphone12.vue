<template>
  <div>
    <div class="Iphone12">
      <section class="product">
        <div class="product__photo">
          <div class="photo-container">
            <div class="photo-main">
              <img
                src="../../../assets/Image/img-24.jpg"
                alt="green apple slice"
                class="img-fluid"
              />
            </div>
            <div class="photo-album">
              <ul>
                <li>
                  <img
                    src="../../../assets/Image/img-24.jpg"
                    alt="green apple"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/Image/img-24.jpg"
                    alt="half apple"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/Image/img-24.jpg"
                    alt="green apple"
                  />
                </li>
                <li>
                  <img src="../../../assets/Image/img-24.jpg" alt="apple top" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="product__info">
          <div class="title">
            <h1>iPhone 12 Pro Max A2412</h1>
            <span>COD: 45999</span>
          </div>
          <div class="price"><span>۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span>تومان</div>
          <div class="variant">
            <h3>رنگ</h3>
            <div class="btn-group" data-toggle="buttons">
              <label class="btn btn-success ">
                <input type="radio" name="options" autocomplete="off" />
                <span class="glyphicon glyphicon-ok"></span>
              </label>

              <label class="btn btn-primary">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autocomplete="off"
                />
                <span class="glyphicon glyphicon-ok"></span>
              </label>

              <label class="btn btn-info">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autocomplete="off"
                />
                <span class="glyphicon glyphicon-ok"></span>
              </label>
            </div>
          </div>
          <div class="description">
            <h3>جزییات کالا</h3>
            <ul>
              <li>حافظه داخلی ۱۲۸ گیگ</li>
              <li>حافظه داخلی ۱۲۸ گیگ</li>
              <li>حافظه داخلی ۱۲۸ گیگ</li>
              <li>حافظه داخلی ۱۲۸ گیگ</li>
            </ul>
          </div>
          <router-link to="/mobile/apple/iphone12/payment">
            <button class="buy--btn">ارسال سفارش</button></router-link
          >
        </div>
      </section>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
