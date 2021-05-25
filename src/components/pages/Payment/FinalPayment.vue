<template>
 <div class="container container-payment">
    <div class="card">
      <div class="heading">
        <h4>پرداخت</h4>
      </div>
      <div class="pricing rounded">
        <div class="images flex-row">
          <img
            src="../../../assets/Image/img-10.jpg"
            class="rounded"
            width="60"
          />
          <div class="business d-flex flex-column">
            <span class=""> iPhone 12 Pro Max A2412</span>
          </div>
        </div>

        <div class="dolla flex-row">
          <sup class="font-weight-bold">تومان</sup>
          <span class="amount">۲۰‍‍‍‍‍٬۰۰۰٬۰۰۰</span>
          <span class="year font-weight-bold">/ year</span>
        </div>

      </div>
      <span class="detail">Payment details</span>
      <div
        class="credit rounded mt-4 d-flex "
      >
        <div class="rounded flex-row">
          <img
            src="../../../assets/Image/img-10.jpg"
            class=""
            width="70"
          />
          <div class="business flex-column">
            <span class="business">Credit Card</span>
            <span class="plan">1234 XXXX XXXX 2570</span>
          </div>
        </div>
        <div>
          <input type="text" class="form-control cvv" placeholder="CVC" />
        </div>
      </div>
      <div
        class="credit rounded mt-4 d-flex "
      >
        <div class="rounded flex-row">
          <img
            src="../../../assets/Image/img-10.jpg"
            class=""
            width="70"
          />
          <div class="business flex-column">
            <span class="business">Credit Card</span>
            <span class="plan">1234 XXXX XXXX 2570</span>
          </div>
        </div>
        <div>
          <input type="text" class="form-control cvv" placeholder="CVC" />
        </div>
      </div>
      <h6 class="">ADD PAYMENT METHOD</h6>
      <div class="email">
        <input
          type="text"
          class="form-control email-text"
          placeholder="Email Address"
        />
      </div>
      <div class="payment-butto">
        <button class="btn btn-primary btn-block ">
          Proceed to payment <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
