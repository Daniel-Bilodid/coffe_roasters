<template>
  <div class="flex justify-between">
    <div>
      <img :src="logo" alt="coffe logo" />
    </div>
    <ul class="flex gap-5 font-barlow font-bold uppercase text-customGray">
      <li class="cursor-pointer">Home</li>
      <li class="cursor-pointer">About us</li>
      <li class="cursor-pointer">Create your plan</li>
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
