<script lang="ts">
import ActionButton from './actionButton.vue';
import ProfileImage from './profileImage.vue';
export default {
    name: "MainNav",
    components: {
    ActionButton,
    ProfileImage
},

    data: () => {
        return {
            company: "Thản Trần",
            url: "https://thandvcv17.vercel.app",
            menuItems: [
                "Teams",
                "Localtion",
                "Hỏi gì không",
                "Students",
                "Jobs"
            ],
            isLoggedIn:false
        }
    },
    methods:{
        loginUser(){
            this.isLoggedIn=true;
        }
    }
}
</script>

<template>
<header class="w-full text-sm">
    <div class="fixed left-0 top-0  w-full h-16 bg-white">
        <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-100 px-8">
            <a v-bind:href="url" class="flex h-full items-center text-2xl">{{ company }}</a>
            <nav class="ml-12 h-full">
                <ul class="flex h-full list-none">
                    <li class="ml-9 h-full first:ml-0" v-for="menuItem  of menuItems" :key="menuItem">
                        <a href="" class="flex h-full items-center py-2.5 ">{{ menuItem }}</a>
                    </li>

                </ul>
            </nav>
            <div class="ml-auto flex h-full items-center">
                <ProfileImage  v-if="isLoggedIn" />
                <ActionButton v-else text="Sign in" @click="loginUser"/>
            </div>
        </div>

    </div>
</header>
</template>
