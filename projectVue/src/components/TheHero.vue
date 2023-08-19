<template>
<main>
    <section class="flex h-screen flex-col  bg-yellow-200 pt-10 pb-20">
        <div class="grid grid-cols-12">

            <div class="col-span-1 col-start-1 border border-blue-700">
                1 colums
            </div>

            <div class="col-span-5 col-start-2 border border-blue-700">
               <the-headline/>
            </div>

            <div class="col-span-5 col-start-7 border border-blue-700">
                5 colums
            </div>
            <div class="col-span-1 col-start-12 border border-blue-700">
                1 colums
            </div>

        </div>
    </section>
</main>
</template>

<script lang="ts">
import TheHeadline from './TheHeadline.vue';
export default {
    name: "TheHero",
    components:{
        TheHeadline
    }
    ,
    beforeCreate() {
        console.log("components is about created");
    },
    created(){
        console.log("has been created");
        
    },
}
</script>
