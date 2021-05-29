<template>
  <div id="app">
    <app-header></app-header>
    <transition
      enter-active-class="animate__zoomIn"
      leave-active-class="animate__fadeOut"
      appear
    >
      <router-view> </router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "./Pages/Shared/AppFooter";
import AppHeader from "./Pages/Shared/AppHeader";
export default {
  component: {
    appFooter: AppFooter,
    appHeader: AppHeader
  }
};
</script>
