<template>
  <header-container>
    <template #default>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 font-light">
        It's awesome here. Why don't you come join's us
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>

<style>
</style>