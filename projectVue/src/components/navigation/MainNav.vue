<script lang="ts">
import ActionButton from '../Shared/actionButton.vue';
import ProfileImage from './profileImage.vue';
import TheSubNav from './theSubNav.vue';
export default {
    name: "MainNav",
    components: {
        ActionButton,
        ProfileImage,
        TheSubNav
    },

    data: () => {
        return {
            menuItems: [
                { text: "Teams", url: "/" },
                { text: "Location", url: "/" },
                { text: "By me", url: "/" },
                { text: "Students", url: "/" },
                { text: "Jobs", url: "/jobs/results" },
            ],
            isLoggedIn: false
        }
    },
    computed: {
        headerHeightClass() {
            return {
                "h-16": !this.isLoggedIn,// true
                "h-32": this.isLoggedIn // false
            }
        }
    },
    methods: {
        loginUser() {
            this.isLoggedIn = true;
        }
    }
}
</script>

<template>
    <header :class="['w-full', 'text-sm', headerHeightClass]">
        <div class="fixed left-0 top-0  w-full h-16 bg-white
    ">
            <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-100 px-8">
                <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-2xl">Thản Trần</router-link>
                <nav class="ml-12 h-full">
                    <ul class="flex h-full list-none">
                        <li class="ml-9 h-full first:ml-0" v-for=" menuItem   of  menuItems " :key="menuItem.text">
                            <router-link :to="menuItem.url" class="flex h-full items-center py-2.5 ">{{ menuItem.text
                            }}</router-link>
                        </li>

                    </ul>
                </nav>
                <div class="ml-auto flex h-full items-center">
                    <ProfileImage v-if="isLoggedIn" />
                    <ActionButton v-else text="Sign in" @click="loginUser" type="primary" />
                </div>
            </div>
            <TheSubNav v-if="isLoggedIn" />
        </div>
    </header>
</template>
