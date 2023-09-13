<template>
  <nav class="text-black p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="hidden lg:flex space-x-6">
        <router-link to="/" class="hover:text-orange-500">Home</router-link>
        <router-link to="/about" class="hover:text-orange-500"
          >About</router-link
        >
        <router-link to="/menu" class="hover:text-orange-500">Menu</router-link>
        <router-link to="/blog" class="hover:text-orange-500">Blog</router-link>
        <router-link to="/contacts" class="hover:text-orange-500"
          >Contact</router-link
        >
      </div>
      <div class="lg:hidden p-3">
        <button @click="toggleMenu" class="text-xl ml-40">
          <img
            class="text-red-500"
            v-if="!showMenu"
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/000000/menu--v1.png"
            alt="menu--v1"
          />
          <img
            v-if="showMenu"
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/delete-sign--v1.png"
            alt="delete-sign--v1"
          />
        </button>
      </div>
    </div>
    <div
      v-show="showMenu"
      class="fixed top-28 left-0 w-full px-5 h-[200px] bg-white border shadow"
    >
      <div class="container mx-auto py-5 h-[200px]">
        <ul class="h-full flex flex-col justify-center text-black space-y-4">
          <li>
            <router-link
              class="hover:text-orange-500"
              to="/"
              @click="toggleMenu"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-orange-500"
              to="/about"
              @click="toggleMenu"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-orange-500"
              to="/menu"
              @click="toggleMenu"
              >Menu</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-orange-500"
              to="/blog"
              @click="toggleMenu"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              class="hover:text-orange-500"
              to="/contacts"
              @click="toggleMenu"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
