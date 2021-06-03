<template>
  <div class="header">
    <nav class="navbar-header navbar navbar-expand-md">
      <div class="brand-header">
        <router-link to="/" id="link" class="router-brand">
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

      <div class="collapse navbar-collapse" id="Navbar">
        <div class="menue-header">
          <div class="navbar-nav mx-auto">
            <div class="dropdown nav-item nav-item-mobile">
              <router-link
                to="/mobile"
                class="nav-link dropdown-toggle first-link"
                data-toggle="dropdown"
              >
                موبایل
              </router-link>

              <ul class="dropdown-menu ">
                <li class="dropdown-item">
                  <router-link
                    tag="a"
                    to="/mobile/apple"
                    class="btn nav-link second-link"
                    data-toggle="dropdown"
                  >
                    اپل
                  </router-link>
                </li>

                <li class="dropdown-item">
                  <router-link
                    tag="a"
                    to="/mobile/apple"
                    class="btn nav-link second-link"
                    data-toggle="dropdown"
                  >
                    سامسونگ
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="dropdown nav-item nav-item-janebi ">
              <router-link
                to="/janebi"
                class="nav-link dropdown-toggle first-link"
                data-toggle="dropdown"
              >
                لوازم جانبی
              </router-link>

              <ul class="dropdown-menu dropdown-menu2">
                <li class="dropdown-item">
                  <router-link
                    tag="a"
                    to="/mobile/apple"
                    class="btn nav-link second-link"
                    data-toggle="dropdown"
                  >
                    پاور بانک
                  </router-link>
                </li>

                <li class="dropdown-item">
                  <router-link
                    tag="a"
                    to="/mobile/apple"
                    class="btn nav-link second-link"
                    data-toggle="dropdown"
                  >
                    کیف و کاور گوشی
                  </router-link>
                </li>
                <li class="dropdown-item">
                  <router-link
                    tag="a"
                    to="/mobile/apple"
                    class="btn nav-link second-link"
                    data-toggle="dropdown"
                  >
                    پایه نگهدارنده گوشی
                  </router-link>
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
