<template>
  <div class="header">
    <nav class="navbar-header navbar navbar-expand-lg">
      <div class="brand-header">
        <router-link to="/" id="link">
          <li><i class="fab fa-android "></i></li>
          <h5>MobileShop</h5>
        </router-link>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-target="#Navbar"
        data-toggle="collapse"
      >
        <span class="navbar-icon">
          <i class="fas fa-bars"> </i>
        </span>
      </button>

      <div class=" collapse navbar-collapse" id="Navbar">
        <div class="menue-header">
          <div class="navbar-nav mx-auto">
            <div class="dropdown nav-item nav-item-mobile">
              <router-link to="/mobile">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown"
                  >موبایل</a
                >
              </router-link>

              <ul class="dropdown-menu ">
                <router-link to="/mobile/apple">
                  <li class="dropdown-item">
                    <a class="btn nav-link " data-toggle="dropdown">اپل</a>
                  </li></router-link
                >

                <router-link to="/mobile/apple">
                  <li class="dropdown-item">
                    <a class="nav-link btn" data-toggle="dropdown">سامسونگ</a>
                  </li></router-link
                >
              </ul>
            </div>

            <div class="dropdown nav-item nav-item-janebi">
              <router-link to="/janebi">
                <a
                  class="nav-link dropdown-toggle dropdown-toggle2"
                  data-toggle="dropdown"
                  >لوازم جانبی</a
                >
              </router-link>

              <ul class="dropdown-menu dropdown-menu2">
                <router-link to="/mobile/apple">
                  <li>
                    <a href="" class="dropdown-item ">کیف و کاور گوشی</a>
                  </li>
                </router-link>
                <li>
                  <a href="" class="dropdown-item ml-2">پاور بانک </a>
                </li>
                <li>
                  <a href="" class="dropdown-item">پایه نگهدارنده گوشی</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="social-header">
          <a href="https://www.instagram.com/" target="_blank" class="nav-icon">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://web.telegram.org/#/login"
            class="nav-icon"
            target="_blank"
          >
            <i class="fab fa-telegram fa-2x"></i>
          </a>
          <a href="https://telegram.com/" target="_blank" class="nav-icon">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://whatsapp.com/" target="_blank" class="nav-icon">
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none !important;
}
</style>
