<template>
  <div>
    <div
      class="footer bg-customDarkBlue w-[100%] h-[346px] mt-[200px] sm:pl-[85px] sm:pr-[85px] pt-[54.44px] xl:pt-[47px] sm:h-[346px] md:h-[270px] xl:h-[120px]"
    >
      <div class="flex items-center flex-col xl:flex-row xl:justify-between">
        <div class="flex items-center flex-col xl:flex-row xl:justify-between">
          <img
            class="w-[217.85px] h-[24px] sm:w-[236px] sm:h-[26px]"
            :src="logo"
            alt="logo"
          />

          <ul
            class="flex flex-col sm:flex-row xl:mt-[6.44px] mt-[33.56px] gap-[33px] xl:ml-[103px] font-barlow text-[12px] uppercase font-bold text-customGray"
          >
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">About us</li>
            <li class="cursor-pointer">Create your plan</li>
          </ul>
        </div>

        <ul
          class="flex justify-end text-white gap-[24px] xl:mt-[0px] mt-[65px]"
        >
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
