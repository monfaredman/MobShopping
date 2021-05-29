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
  </div>
</template>

<script>
import AppBanner from "./AppBanner";
import AppSection1 from "./AppSection1";
import AppSection2 from "./AppSection2";
import AppSection3 from "./AppSection3";
import AppSection4 from "./AppSection4";
import AppSection5 from "./AppSection5";
import AppSection6 from "./AppSection6";
import AppSection8 from "./AppSection8";

export default {
  components: {
    appBanner: AppBanner,
    appSection1: AppSection1,
    appSection2: AppSection2,
    appSection3: AppSection3,
    appSection4: AppSection4,
    appSection5: AppSection5,
    appSection6: AppSection6,
    appSection8: AppSection8
  }
};
</script>
