<template>
  <header
    class="bg-customDarkBlue text-white p-4 flex justify-between items-center"
  >
    <button @click="toggleMenu" class="lg:hidden z-50">
      <svg
        v-if="!isOpen"
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <svg
        v-else
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <nav
      :class="[
        'fixed inset-0 bg-customDarkBlue transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
      class="lg:relative lg:translate-x-0 lg:flex lg:items-center lg:gap-8 p-6 lg:p-0 z-40"
    >
      <ul
        class="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-lg"
      >
        <router-link to="/" class="cursor-pointer mt-[10px]">Home</router-link>
        <router-link to="/about" class="cursor-pointer mt-[10px]"
          >About us</router-link
        >
        <router-link to="/plan" class="cursor-pointer mt-[10px]"
          >Create your plan</router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
import logo from "@/assets/shared/desktop/logo-white.svg";

export default {
  data() {
    return {
      isOpen: false,
      logo,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
.bg-customDarkBlue {
  background-color: #1f2937;
}
</style>
