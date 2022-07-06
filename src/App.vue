<template>
  <Header />
  <CurrencyRateUpdater />
  <RouterView />
</template>

<script>
import Header from "@/components/core/Header.vue";
import CurrencyRateUpdater from "./components/CurrencyRateUpdater.vue";
export default {
  components: {
    Header,
    CurrencyRateUpdater,
  },
};
</script>
<style>
@import "@/assets/base.css";
</style>
