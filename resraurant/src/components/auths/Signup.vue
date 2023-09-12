<script setup>
import Footer from "../../pages/Footer/Footer.vue";
import Header from "../../pages/Header/Header.vue";
</script>
<template>
  <div>
    <Header></Header>
    <div class="my-32 mx-auto sm:w-full sm:border md:w-[600px]">
      <h2 class="text-center text-2xl font-serif pt-10">Đăng ký tài khoản</h2>
      <form class="p-5 font-serif">
        <div>
          <label for="name">Tên đăng nhập</label>
          <input
            type="text"
            class="w-full my-5 outline-none border px-5 py-3"
            placeholder="Nhập tên đăng nhập "
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            class="w-full my-5 outline-none border px-5 py-3"
            placeholder="Email "
          />
        </div>
        <div>
          <label for="password">Mật Khẩu</label>
          <input
            type="password"
            class="w-full my-5 outline-none border px-5 py-3"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div>
          <label for="password">Nhập lại Khẩu</label>
          <input
            type="password"
            class="w-full my-5 outline-none border px-5 py-3"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <p class="mb-5">
          Bạn đã có tài khoản?<router-link to="/login" class="text-blue-600">
            Đăng nhập</router-link
          >
        </p>
        <div class="flex justify-center">
          <button
            class="w-full sm:w-auto rounded sm:px-12 py-3 border border-solid border-orange-400 hover:bg-orange-400 hover:text-white"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>