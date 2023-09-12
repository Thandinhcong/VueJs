<template>
  <div>
    <h2 class="text-2xl mb-10 font-serif">Get in Touch</h2>
    <form
      action=" "
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="900"
    >
      <textarea
        class="w-full border h-40 p-3 outline-none font-serif"
        placeholder="Enter Message"
      ></textarea>
      <div class="flex justify-between gap-5">
        <input
          type="text"
          placeholder="Enter your name"
          class="border w-full my-6 py-3 p-3 outline-none font-serif"
        />
        <input
          type="text"
          placeholder="Email"
          class="border w-full my-6 py-3 p-3 outline-none font-serif"
        />
      </div>
      <input
        type="text"
        placeholder="Enter Subject"
        class="border w-full my-6 py-3 p-3 outline-none font-serif"
      />
      <button
        class="px-14 py-4 border border-solid rounded-md border-orange-500 hover:bg-orange-500 hover:text-white"
      >
        SEND
      </button>
    </form>
  </div>
</template>
<script setup>
</script>