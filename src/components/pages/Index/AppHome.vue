<template>
  <div>
    <app-banner></app-banner>
    <app-section-1></app-section-1>
    <app-section-8></app-section-8>
    <app-section-2></app-section-2>
    <app-section-6></app-section-6>
    <app-section-3></app-section-3>
    <app-section-4></app-section-4>
    <app-section-5></app-section-5>
    <not-found></not-found>
  </div>
</template>

<script>
import AppBanner from "./components/AppBanner.vue";
import AppSection1 from "./components/AppSection1.vue";
import AppSection2 from "./components/AppSection2.vue";
import AppSection3 from "./components/AppSection3.vue";
import AppSection4 from "./components/AppSection4.vue";
import AppSection5 from "./components/AppSection5.vue";
import AppSection6 from "./components/AppSection6.vue";
import AppSection8 from "./components/AppSection8";
import NotFound404 from "./components/NotFound404";

export default {
  components: {
    appBanner: AppBanner,
    appSection1: AppSection1,
    appSection2: AppSection2,
    appSection3: AppSection3,
    appSection4: AppSection4,
    appSection5: AppSection5,
    appSection6: AppSection6,
    appSection8: AppSection8,
    notFound: NotFound404
  },

  data() {
    return {};
  }
};
</script>
