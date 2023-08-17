<template>
  <MainNav/>
  <HelloWorld />
  <main-nav></main-nav>
  <mainnav/>
  <main-nav/>

</template>

<script  lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MainNav from "./components/MainNav.vue"
export default{
  name:"App",
  components:{
    MainNav,
  }
}
</script>



