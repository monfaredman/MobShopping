<template>
  <!-- footer -->
  <footer class="footer">
    <div class="top-section-footer">
      <div class="footer-item-1">
        <router-link to="login" class="btn btn-info">
          <a>ورود به حساب کاربری </a>
        </router-link>
        <br>
         <router-link class="btn btn-info" :to="{hash:'#link'}">
          <a>بالای سایت</a>
        </router-link>
      </div>
      <div class="footer-item-2">
        <ul>
          <li>
            <h4>اطلاعات فروشگاه</h4>
          </li>
          <li>
            نشانی : تهران، خیابان ولیعصـر، تقاطع میـرداماد،<br />
            مجتمع کامپیوتـر پایتخت، برج A، طبقه ۸، واحد ۸۰۵، درب ۳
          </li>
          <li>
            تلفن: ۸۸۶۷۲۳۶۱-۰۲۱
          </li>
          <li>
            ایمیل: sales@shop.ir
          </li>
          <li>
            ساعات کاری فروشگاه: شنبه تا چهارشنبه ۹:۳۰ الـی ۱۹ / پنج شنبه‌ها ۹:۳۰
            الی ۱۶
          </li>
        </ul>
      </div>

      <div class="footer-item-3">
        <ul>
          <li>
            <h4>راهنمای مشتریان</h4>
          </li>
          <li><a href=""> راهنمای خرید</a></li>
          <li><a href="">روش‌های ارسال و پرداخت</a></li>
          <li><a href="">پرسش‌های متداول</a></li>
          <li><a href="">قوانین و مقررات</a></li>
          <li><a href="">درباره ما</a></li>
        </ul>
      </div>
    </div>
    <div class="button-section-footer">
      <div class="footer-item-1">
        <p class="">فروشگاه اینترنتی موبایل شاپ © 2021</p>
        <h5 class="">
          استفاده از محتویات این سایت تنها با ذکر منبع و درج لینک مجاز است
        </h5>
      </div>
      <div class="footer-item-2">
        <img src="/src/assets/Image/img-19.png" alt="" class="img-fluid" />
        <img src="/src/assets/Image/img-18.jpeg" alt="" class="img-fluid" />
        <img src="/src/assets/Image/img-20.png" alt="" class="img-fluid" />
      </div>
    </div>
  </footer>

  <!-- end footer -->
</template>

<script>
export default {};
</script>

<style></style>
