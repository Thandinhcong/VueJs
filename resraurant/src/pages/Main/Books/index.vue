<script setup></script>

<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    class="w-full relative font-serif"
  >
    <img
      class="w-full h-[400px] md:h-full"
      src="https://res.cloudinary.com/dxzlnojyv/image/upload/v1694406595/section_bg04_ovhva8.png"
      alt="book a table"
    />
    <div class="absolute inset-0 left-0 top-0">
      <div class="text-center">
        <p class="text-orange-500 my-5 md:my-10 text-lg md:text-xl">
          About Our Restaurant
        </p>
        <h2 class="md:text-5xl text-2xl md:mb-10 mb-5">Book A Table</h2>
      </div>

      <form
        class="md:h-40 w-[95%] p-5 md:items-center mx-auto rounded-lg md:w-[90%] bg-white text-black shadow-md md:flex md:justify-between md:px-10"
      >
        <select
          class="w-full p-5 mb-5 md:mb-0 md:w-60 border md:mx-10 md:px-10 py-4 rounded-lg outline-none"
        >
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
        <input
          type="date"
          class="border mb-5 w-full md:mb-0 md:mr-3 px-10 py-4 rounded-md"
        />
        <input
          type="time"
          class="border mb-5 w-full md:mb-0 md:mr-3 px-10 py-4 rounded-md"
        />
        <button
          class="px-14 w-full border border-solid border-orange-500 text-lg font-sans py-4 rounded-md hover:bg-orange-500 hover:text-white"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</template>