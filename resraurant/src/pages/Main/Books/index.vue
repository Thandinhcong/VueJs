<script setup></script>

<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    class="w-full relative"
  >
    <img
      class="w-full"
      src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406595/section_bg04_ovhva8.png"
      alt="book a table"
    />
    <div class="absolute inset-0 left-0 top-0">
      <div class="text-center">
        <p class="text-orange-500 my-10 text-xl">About Our Restaurant</p>
        <h2 class="text-5xl mb-10">Book A Table</h2>
      </div>

      <form
        class="h-40 items-center mx-auto rounded-lg w-[90%] bg-white text-black shadow-md flex justify-between px-10"
      >
        <select class="w-60 border mx-10 px-10 py-4 rounded-lg outline-none">
          <option value="" class="">
            <span>Person</span>
          </option>
          <option value="">
            <span>Person 2</span>
          </option>
          <option value="">
            <span>Person 3</span>
          </option>
          <option value="">
            <span>Person 4</span>
          </option>
        </select>
        <input type="date" class="border px-10 py-4 rounded-md" />
        <input type="time" class="border px-10 py-4 rounded-md" />
        <button
          class="px-14 border border-solid border-orange-500 text-lg font-sans py-4 rounded-md hover:bg-orange-500 hover:text-white"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</template>