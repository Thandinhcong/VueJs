<template>
  <ul class="">
    <li v-for="spotligth in spotligths" :key="spotligth.id">
      <slot
        :img="spotligth.img"
        :title="spotligth.title"
        :description="spotligth.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "SpotLigth",
  data() {
    return {
      spotligths: [],
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    this.spotligths = response.data;
  },
};
</script>

<style>
</style>