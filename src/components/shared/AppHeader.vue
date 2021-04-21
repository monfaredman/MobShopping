<template>
<div style="height:93px;position:fixed;z-index:299" class="w-100">
    <nav class="navbar navbar-expand-lg" style="height:93px" >
      <router-link to="/">
      <a href="#" class="navbar-brand">
        <i class="fab fa-android fa-5x"></i>
        <h5 style="margin-top: -27px;">MobileShop</h5>
      </a>
      </router-link>

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
        <ul class="navbar-nav mx-auto">


  
  <li class="dropdown nav-item" style="border-left:1px solid black">
            <router-link to="/mobile">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown">موبایل</a>
            </router-link>
          
          
          <ul class="dropdown-menu">
             <router-link to="/apple">
            <li class="text-right dropdown-item">
            <a class="btn nav-link1 " data-toggle="dropdown">اپل</a>
              </li></router-link>
            
           
<router-link to="/samsong">
            <li class="text-right dropdown-item">
               
            <a class="nav-link2 btn" data-toggle="dropdown">سامسونگ</a>
            </li></router-link>
            

          </ul>
       </li>
         
<li class="dropdown nav-item" style="border-right:1px solid black">
            <router-link to="/janebi">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown">لوازم جانبی</a>
            </router-link>
          
          
          <ul class="dropdown-menu">
            <li><a href="" class="dropdown-item text-right ">کیف و کاور گوشی</a></li>
            <li><a href="" class="dropdown-item text-right ">پاور بانک (شارژر همراه)</a></li>
            <li><a href="" class="dropdown-item text-right ">پایه نگهدارنده گوشی</a></li>
          </ul>
       </li>

        </ul>
        <!-- social -->

        <div class="nav-icons d-none d-lg-block">
          <a href="https://www.instagram.com/" target="_blank" class="nav-icon">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://web.telegram.org/#/login" class="nav-icon" target="_blank">
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
      <!-- end social -->
    </nav>
</div>
</template>

<script>
export default {};
</script>

<style>
a{
   text-decoration: none !important;
}
ul li.nav-item {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-radius: 3px;
  padding: 0px 32px 0px 32px;
  border-color: aqua;
}

.dropdown:hover .dropdown-menu {
  display: block;
  }
  
</style>

