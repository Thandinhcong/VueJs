<script setup>
import Footer from "../../pages/Footer/Footer.vue";
import Header from "../../pages/Header/Header.vue";
</script>
<template>
  <div>
    <Header></Header>
    <div
      class="my-10 mx-auto p-5 sm:w-full md:w-[600px] md:border lg:w-1/2 md:my-32"
    >
      <h2 class="text-center text-2xl font-serif pt-5 sm:pt-10">
        Đăng nhập tài khoản
      </h2>
      <form class="p-5 font-serif">
        <div class="mb-3">
          <label for="email" class="">Email</label>
          <input
            type="email"
            class="w-full outline-none border px-3 my-3 sm:my-5 py-2"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <label for="password">Mật Khẩu</label>
          <input
            type="password"
            class="w-full outline-none border px-3 my-3 py-2 sm:my-5 md:my-5 xl:my-5"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <p class="mb-3">
          Bạn chưa có tài khoản?
          <router-link to="/signup" class="text-blue-600">Đăng ký</router-link>
        </p>
        <div class="flex justify-center">
          <button
            class="w-full sm:w-auto px-4 py-2 rounded border border-solid border-orange-400 hover:bg-orange-400 hover:text-white xl:px-10 xl:py-3"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>

    <Footer></Footer>
  </div>
</template>