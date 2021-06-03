<template>
  <!--Carousel Wrapper-->
  <div
    id="multi-item-example"
    class="carousel slide carousel-multi-item"
    data-ride="carousel"
  >
    <!--Controls-->
    <div class="controls-top">
      <a
        class="btn-floating first-control"
        href="#multi-item-example"
        data-slide="prev"
        ><i class="fa fa-chevron-left"></i
      ></a>
      <a
        class="btn-floating second-control"
        href="#multi-item-example"
        data-slide="next"
        ><i class="fa fa-chevron-right"></i
      ></a>
    </div>
    <!--/.Controls-->

    <!--Indicators-->
    <ol class="carousel-indicators">
      <li
        data-target="#multi-item-example"
        data-slide-to="0"
        class="active  mr-5"
      ></li>
      <li data-target="#multi-item-example" data-slide-to="1"></li>
    </ol>
    <!--/.Indicators-->

    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <!--First slide-->
      <div class="carousel-item active">
        <div class="row-item">
          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>

          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>

          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>
        </div>
      </div>
      <!--/.First slide-->

      <!--Second slide-->
      <div class="carousel-item ">
        <div class="row-item">
          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>

          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>

          <div class="col-item">
            <img src="../../assets/Image/img-14.png" alt="Card image cap" />
          </div>
        </div>
      </div>
      <!--/.Second slide-->
    </div>
    <!--/.Slides-->
  </div>
  <!--/.Carousel Wrapper-->
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style></style>
