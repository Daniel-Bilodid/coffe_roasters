<template>
  <div class="flex justify-between">
    <div>
      <img :src="logo" alt="coffe logo" />
    </div>
    <ul class="flex gap-5 font-barlow font-bold uppercase text-customGray">
      <router-link to="/" class="cursor-pointer">Home</router-link>
      <router-link to="/about" class="cursor-pointer">About us</router-link>
      <router-link to="/plan" class="cursor-pointer"
        >Create your plan</router-link
      >
    </ul>
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
