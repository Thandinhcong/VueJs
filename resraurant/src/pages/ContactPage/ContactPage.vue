<script setup>
import Header from "../Header/Header.vue";
import BannerContact from "./BannerContact.vue";
import Footer from "../Footer/Footer.vue";
import ContactAddres from "./ContactAddres.vue";
import ContactForm from "./ContactForm.vue";
</script>
<template>
  <div class="">
    <Header></Header>
    <banner-contact />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29791.353601641316!2d105.80903229060367!3d21.03591876528189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0970fd0f07%3A0x5c4669128a34ef4e!2zQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1694495765026!5m2!1svi!2s"
      class="w-full px-10 pb-10 h-[600px]"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="grid grid-cols-12 px-10 gap-8 my-10">
      <ContactForm class="col-span-8" />
      <ContactAddres class="col-span-3" />
    </div>
    <Footer></Footer>
  </div>
</template>