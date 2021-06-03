<template>
  <main class="page">
    <section class="shopping-cart dark">
      <div class="container">
        <div class="block-heading">
          <div>
            <h2>سبد خرید شما</h2>
          </div>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="items">
                <div class="product" :class="{ close: closeproduct }">
                  <div class="row">
                    <div class="col-md-3">
                      <img
                        class="img-fluid mx-auto d-block image"
                        src="../../assets/Image/img-24.jpg"
                      />
                    </div>
                    <div class="col-md-8 product-item">
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
                              @change="Money()"
                              v-model="count"
                              id="quantity"
                              type="number"
                              value=""
                              class="form-control quantity-input"
                            />
                          </div>
                          <div class="col-md-3 price">
                            <span> ۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰ </span>تومان
                          </div>
                          <div class="col">
                            <a
                              @click="closeProduct()"
                              class="btn btn-light p-1 text-danger"
                            >
                              &#10005;
                            </a>
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
                  <span class="text">قیمت </span
                  ><span class="price"> {{ cashMoney }}</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">تخفیف</span
                  ><span class="price">{{ Discount }}</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">هزینه ارسال</span
                  ><span class="price" style="margin-right:93px">
                    {{ sendMoney }}</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <div class="summary-item">
                  <span class="text">هزینه نهایی</span><br />
                  <span class="price">{{ totalMoney }}</span
                  ><span style="font-size:10px">تومان</span>
                </div>
                <router-link to="/mobile/apple/iphone12/payment/finalpayment">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    :disabled="checkPayment"
                    @click="totalMoneyProps"
                  >
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
import { BusEvent } from "../../EventBus";
export default {
  data() {
    return {
      count: "",
      price: 20000000,
      Discount: 300000,
      cashMoney: "",
      totalMoney: "",
      sendMoney: 100000,
      discountMoney: "",
      cashMoney2: "",
      closeproduct: false,
      checkPayment: true
    };
  },
  methods: {
    Money() {
      this.cashMoney = this.count * this.price;
      this.cashMoney2 = this.cashMoney;
      this.discountMoney = this.cashMoney2 -= this.Discount;
      this.totalMoney = this.discountMoney += this.sendMoney;
      if (this.count == "") {
        this.checkPayment = true;
      } else {
        this.checkPayment = false;
      }
    },
    closeProduct() {
      this.closeproduct = true;
      this.Discount = 0;
      this.cashMoney = 0;
      this.totalMoney = 0;
      this.sendMoney = 0;
    },
    totalMoneyProps() {
      EventBus.$emit("totalMoneyProps", this.totalMoney);
      console.log(this.totalMoney);
    }
  },

  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("Do you really want to leave?");
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style>
.close {
  display: none;
}
</style>
