<template>
  <div>
    <div
      class="footer bg-customDarkBlue h-[120px] w-[100%] mt-[200px] pl-[85px] pr-[85px] pt-[47px]"
    >
      <div class="flex justify-between">
        <div class="flex">
          <img :src="logo" alt="logo" />

          <ul class="flex text-white mt-[6.44px] gap-[33px] ml-[103px]">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">About us</li>
            <li class="cursor-pointer">Create your plan</li>
          </ul>
        </div>

        <ul class="flex justify-end text-white gap-[24px]">
          <li class="cursor-pointer">
            <img :src="facebook" alt="facebook" />
          </li>
          <li class="cursor-pointer">
            <img class="mt-[2.25px]" :src="twitter" alt="twitter" />
          </li>
          <li class="cursor-pointer">
            <img :src="instagram" alt="instagram" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/shared/desktop/logo-white.svg";
import facebook from "@/assets/shared/desktop/icon-facebook.svg";
import twitter from "@/assets/shared/desktop/icon-twitter.svg";
import instagram from "@/assets/shared/desktop/icon-instagram.svg";
export default {
  name: "AppFooter",
  data() {
    return {
      logo,
      facebook,
      twitter,
      instagram,
    };
  },
};
</script>

<style></style>
