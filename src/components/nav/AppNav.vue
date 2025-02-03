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
      class="gap-[32px] md:mt-[-7px] font-barlow font-bold uppercase text-customGray text-[12px] hidden sm:flex tracking-[0.92px]"
    >
      <router-link to="/" class="cursor-pointer mt-[10px]">Home</router-link>
      <router-link to="/about" class="cursor-pointer mt-[10px]"
        >About us</router-link
      >
      <router-link to="/plan" class="cursor-pointer mt-[10px]"
        >Create your plan</router-link
      >
    </ul>

    <div class="visible sm:hidden">
      <AppBurgerMenu class="lg:hidden" />
    </div>
  </div>
</template>

<script>
import logo from "../../assets/shared/desktop/logo.svg";
import AppBurgerMenu from "../burgerMenu/AppBurgerMenu.vue";

export default {
  name: "AppNav",
  data() {
    return {
      logo,
    };
  },
  components: {
    AppBurgerMenu,
  },
};
</script>

<style lang="css"></style>
