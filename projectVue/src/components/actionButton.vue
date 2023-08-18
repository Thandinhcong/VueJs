<template>
<button class="rounded border-0 
  bg-brand-blue-1 
  px-5 py-3 
  font-medium
 text-white 
hover:shadow-blue" v-on:click="handleSubmit">Sign up</button>
</template>

<script lang="ts">
export default {
    name: "ActionButton",
    methods: {
        handleSubmit() {
            console.log("i love you");
        }
    }
}
</script>
