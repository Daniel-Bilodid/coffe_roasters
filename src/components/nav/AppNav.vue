<template>
  <div class="flex justify-between">
    <div>
      <img
        class="w-[163px] h-[18px] sm:w-[236px] sm:h-[26px]"
        :src="logo"
        alt="coffe logo"
      />
    </div>
    <ul
      class="gap-5 font-barlow font-bold uppercase text-customGray text-[12px] hidden sm:flex"
    >
      <router-link to="/" class="cursor-pointer mt-[10px]">Home</router-link>
      <router-link to="/about" class="cursor-pointer mt-[10px]"
        >About us</router-link
      >
      <router-link to="/plan" class="cursor-pointer mt-[10px]"
        >Create your plan</router-link
      >
    </ul>

    <div class="visible sm:hidden">Burger</div>
  </div>
</template>

<script>
import logo from "../../assets/shared/desktop/logo.svg";
export default {
  name: "AppNav",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
