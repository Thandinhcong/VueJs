<script setup></script>

<template>
  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <div class="text-center group-[]:">
      <p class="text-orange-500 text-lg sm:text-xl my-5 md:my-10">
        Our Offerd Menu
      </p>
      <h2 class="md:text-5xl text-1xl mx-auto w-3/6">
        Some Trendy And Popular Courses Offerd
      </h2>
    </div>
    <nav>
      <ul class="flex my-10 justify-center font-thin">
        <li class="mr-10"><router-link to="">Special</router-link></li>
        <li class="mr-10"><router-link to="">Lunch</router-link></li>
        <li class="mr-10"><router-link to="">Brakefirst</router-link></li>
        <li class=""><router-link to="">Dinner</router-link></li>
      </ul>
    </nav>
    <div class="flex">
      <!-- 1 -->
      <div class="relative group w-full h-auto">
        <img
          src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406593/gallery1_ads6fs.png"
          alt=""
          class="w-full h-[548px] group-hover:opacity-80"
        />

        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-2xl text-orange-500">$255</p>
          <h2 class="text-4xl my-5">Delicious Food</h2>
          <p class="mb-10">Ut enim ad minim veniam quis nostr.</p>
          <router-link
            to=""
            class="px-10 py-4 rounded-lg border border-solid border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Đặt ngay
          </router-link>
        </div>
      </div>
      <!-- 2 -->
      <div class="relative group w-full h-auto">
        <img
          src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406593/gallery2_jnn56c.png"
          alt=""
          class="w-full h-[548px] group-hover:opacity-80"
        />

        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p class="text-2xl text-orange-500">$255</p>
          <h2 class="text-4xl my-5">Delicious Food</h2>
          <p class="mb-10">Ut enim ad minim veniam quis nostr.</p>
          <router-link
            to=""
            class="px-10 py-4 rounded-lg border border-solid border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Đặt ngay
          </router-link>
        </div>
      </div>
      <!-- 3 -->
      <div>
        <div class="relative group w-full h-auto">
          <img
            src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406593/gallery1_ads6fs.png"
            alt=""
            class="w-full h-auto group-hover:opacity-80"
          />

          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-2xl text-orange-500">$255</p>
            <h2 class="text-4xl my-5">Delicious Food</h2>
            <p class="mb-10">Ut enim ad minim veniam quis nostr.</p>
            <router-link
              to=""
              class="px-10 py-4 rounded-lg border border-solid border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Đặt ngay
            </router-link>
          </div>
        </div>
        <!-- 4 -->
        <div class="relative group w-full h-auto">
          <img
            src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406593/gallery4_wfeoow.png"
            alt=""
            class="w-full h-[270px] group-hover:opacity-80"
          />

          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-2xl text-orange-500">$255</p>
            <h2 class="text-4xl my-5">Delicious Food</h2>
            <p class="mb-10">Ut enim ad minim veniam quis nostr.</p>
            <router-link
              to=""
              class="px-10 py-4 rounded-lg border border-solid border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Đặt ngay
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>