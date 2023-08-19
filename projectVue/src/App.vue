<template>
  <MainNav/>
  <TheHero/>  
</template>

<script  lang="ts">
import MainNav from "./components/navigation/MainNav.vue";
import TheHero from "./components/JobSearch/TheHero.vue";
export default{
  name:"App",
  components:{
    MainNav,
    TheHero
  }
}
</script>



