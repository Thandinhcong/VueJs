<template>
<img class="h-8 w-8 rounded-3xl object-contain" :src="imageLink"/>
</template>
<script lang="ts">

export default {
    name:"ProfileImage",
    data:()=>{
        return {
            imageLink:"https://images.pexels.com/photos/17887805/pexels-photo-17887805/free-photo-of-xe-h-i-xe-chrome-v-a-he.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    }
}
</script>