<template>
  <div id="carouselExampleDark" class="carousel  slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleDark"
        data-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></li>
      <li data-target="#carouselExampleDark" data-slide-to="1"></li>
      <li data-target="#carouselExampleDark" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a>
          <img
            src="../../assets/Image/img-51.jpg"
            class="d-block w-100"
            alt="First slide"
          />
        </a>
        <div class="carousel-caption ">
          <router-link to="/mobile/apple/iphone12" id="link">
            <h4 class="text-light d-inline-block">Iphone 12 pro max</h4>
            <br />
            <p class="text-light">سریع انفجار کن</p>
          </router-link>
        </div>
      </div>

      <div class="carousel-item">
        <img
          src="../../assets/Image/img-51.jpg"
          class="d-block w-100"
          alt="Second slide"
        />
        <div class="carousel-caption">
          <router-link to="/mobile/apple/iphone12" id="link">
            <h4 class="text-light d-inline-block">Iphone 12 pro max</h4>
            <br />
            <p class="text-light">سریع انفجار کن</p>
          </router-link>
        </div>
      </div>
      <div class="carousel-item" alt="Third slide">
        <img
          src="../../assets/Image/img-51.jpg"
          class="d-block w-100 "
          alt="Third slide"
        />
        <div class="carousel-caption ">
          <router-link to="/mobile/apple/iphone12" id="link">
            <h4 class="text-light d-inline-block">Iphone 12 pro max</h4>
            <br />
            <p class="text-light">سریع انفجار کن</p>
          </router-link>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleDark"
      data-slide="prev"
      role="button"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      role="button"
      href="#carouselExampleDark"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
