<template>
  <MainNav/>
  <TheHero/>  
</template>

<script  lang="ts">
import MainNav from "./components/MainNav.vue";
import TheHero from "./components/TheHero.vue";
export default{
  name:"App",
  components:{
    MainNav,
    TheHero
  }
}
</script>



