<template>
  <div class="container container-payment">
    <div class="card">
      <div class="heading">
        <h4>پرداخت</h4>
      </div>
      <div class="pricing rounded">
        <div class="images flex-row">
          <img src="../../assets/Image/img-10.jpg" class="rounded" width="60" />
          <div class="business d-flex flex-column">
            <span class=""> iPhone 12 Pro Max A2412</span>
          </div>
        </div>
        <div class="dolla flex-row">
          <span class="amount">{{ totalMoney }}</span>
          <span class="font-weight-bold">تومان</span>
        </div>
      </div>
      <span class="detail">روش های پرداخت</span>
      <div class="credit rounded">
        <div class="rounded flex-row">
          <img src="../../assets/Image/img-25.png" width="70" />
          <div class="business flex-column">
            <span class="business">پرداخت از طریق</span>
            <span class="plan">بانک سامان</span>
          </div>
        </div>
        <button class="btn btn-primary btn-block btn-dargah">
          رفتن به درگاه پرداخت
        </button>
      </div>
      <div class="credit rounded mb-5">
        <div class="rounded flex-row">
          <img src="../../assets/Image/img-26.png" width="70" />
          <div class="business flex-column">
            <span class="business">پرداخت از طریق</span>
            <span class="plan"> زرین پال</span>
          </div>
        </div>
        <button
          class="btn btn-primary btn-block  btn-dargah"
          @click="postPost()"
        >
          رفتن به درگاه پرداخت
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { BusEvent } from "../../EventBus";
export default {
  data() {
    return {
      totalMoney: ""
    };
  },
  created() {
    EventBus.$on("totalMoneyProps", monetBus => {
      this.totalMoney = monetBus;
      alert(this.totalMoney);
    });
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
