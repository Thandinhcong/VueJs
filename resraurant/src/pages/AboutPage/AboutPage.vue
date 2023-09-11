<template>
  <div>
    <Header></Header>
    <BannerAbout />
    <AboutRestaurant />
    <index />
    <PreView />
    <About />
    <Services />
    <Footer />
  </div>
</template>
<script setup>
import BannerAbout from "./BannerAbout.vue";
import index from "../Main/Books/index.vue";
import AboutRestaurant from "../Main/About/AboutRestaurant.vue";
import PreView from "../Main/Preview/PreView.vue";
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
import Services from "../Main/Services/Services.vue";
import About from "../Main/About/About.vue";
</script>