<template>
  <div class="container vueper">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 1200: { visibleSlides: 1, slideMultiple: 1 } }"
    >

    
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import 'vueperslides/dist/vueperslides.css';
import AppSection7 from "./AppSection7.vue";

export default {
   components:{
      VueperSlides, VueperSlide,
      appSection7: AppSection7,
       },

data: () => ({

  slides:[ 
  {
     title: '',
    content: '',
  image: require('../../../../assets/Image/img-13.png'),

 },
  {
     title: '',
    content: '',
  image: require('../../../../assets/Image/img-1.jpg'),

 },
   {
     title: '',
    content: '',
  image: require('../../../../assets/Image/img-14.png'),

 },
  {
     title: '',
    content: '',
  image: require('../../../../assets/Image/img-15.jpg'),

 },
  {
     title: '',
    content: '',
  image: require('../../../../assets/Image/img-16.png'),

 },
 
 
  
 
  ],

 
  
 








}
),
};







</script>

<style>
div.vueper {
  direction:ltr !important ;
}

.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color:pink;}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}





</style>
