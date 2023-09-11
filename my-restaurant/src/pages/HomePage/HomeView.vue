<template>
  <div>
    <Header class=""></Header>
    <banner />
    <PreViewVue />
    <order-now></order-now>

    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "../Header/Header.vue";
import Banner from "../Main/Banner/Banner.vue";
import PreViewVue from "../Main/Preview/PreView.vue";
import OrderNow from "../Main/orderNow/OrderNow.vue";
import Footer from "../Footer/Footer.vue";
</script>