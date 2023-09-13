<template>
  <div class="fixed z-50 top-0 left-0 w-full h-28 bg-white border-x-stone-200">
    <div class="flex justify-between p-5">
      <logo></logo>
      <nav-bar></nav-bar>
      <order-online class="hiden md:block"></order-online>
    </div>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import NavBar from "./NavBar.vue";
import OrderOnline from "./OrderOnline.vue";
</script>