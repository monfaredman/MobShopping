<template>
  <div id="app">
    <app-header></app-header>
    <transition
      enter-active-class="animate__zoomIn"
      leave-active-class="animate__fadeOut" appear
    >
      <router-view> </router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
