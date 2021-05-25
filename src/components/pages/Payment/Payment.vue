<template>
  <main class="page">
    <section class="shopping-cart dark">
      <div class="container">
        <div class="block-heading">
          <h2>سبد خرید شما</h2>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="items">
                <div class="product">
                  <div class="row">
                    <div class="col-md-3">
                      <img
                        class="img-fluid mx-auto d-block image"
                        src="../../../assets/Image/img-24.jpg"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="info">
                        <div class="row">
                          <div class="col-md-5 product-name">
                            <div class="product-name">
                              <a href="#">iPhone 12 Pro Max A2412</a>
                              <div class="product-info">
                                <div>
                                  Display: <span class="value">5 inch</span>
                                </div>
                                <div>RAM: <span class="value">4GB</span></div>
                                <div>
                                  Memory: <span class="value">32GB</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 quantity">
                            <label for="quantity">تعداد:</label>
                            <input
                              id="quantity"
                              type="number"
                              value="1"
                              class="form-control quantity-input"
                            />
                          </div>
                          <div class="col-md-3 price">
                            <span> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰ </span>تومان
                          </div>
                          <div class="col">
                            <span class="close">&#10005;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="row">
                    <div class="col-md-3">
                      <img
                        class="img-fluid mx-auto d-block image"
                        src="../../../assets/Image/img-24.jpg"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="info">
                        <div class="row">
                          <div class="col-md-5 product-name">
                            <div class="product-name">
                              <a href="#">iPhone 12 Pro Max A2412</a>
                              <div class="product-info">
                                <div>
                                  Display: <span class="value">5 inch</span>
                                </div>
                                <div>RAM: <span class="value">4GB</span></div>
                                <div>
                                  Memory: <span class="value">32GB</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 quantity">
                            <label for="quantity">تعداد:</label>
                            <input
                              id="quantity"
                              type="number"
                              value="1"
                              class="form-control quantity-input"
                            />
                          </div>
                          <div class="col-md-3 price">
                            <span> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰ </span>تومان
                          </div>
                          <div class="col">
                            <span class="close">&#10005;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product">
                  <div class="row">
                    <div class="col-md-3">
                      <img
                        class="img-fluid mx-auto d-block image"
                        src="../../../assets/Image/img-24.jpg"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="info">
                        <div class="row">
                          <div class="col-md-5 product-name">
                            <div class="product-name">
                              <a href="#">iPhone 12 Pro Max A2412</a>
                              <div class="product-info">
                                <div>
                                  Display: <span class="value">5 inch</span>
                                </div>
                                <div>RAM: <span class="value">4GB</span></div>
                                <div>
                                  Memory: <span class="value">32GB</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4 quantity">
                            <label for="quantity">تعداد:</label>
                            <input
                              id="quantity"
                              type="number"
                              value="1"
                              class="form-control quantity-input"
                            />
                          </div>
                          <div class="col-md-3 price">
                            <span> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰ </span>تومان
                          </div>
                          <div class="col">
                            <span class="close">&#10005;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="summary">
                <h3>مجموع</h3>
                <div class="summary-item">
                  <span class="text">هزینه</span
                  ><span class="price"> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">تخفیف</span
                  ><span class="price"> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">هزینه ارسال</span
                  ><span class="price" style="margin-right:93px">
                    ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">هزینه نهایی</span><br />
                  <span class="price"> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <router-link to="/mobile/apple/iphone12/payment/finalpayment">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  تکمیل خرید
                </button>
               </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {};
</script>
