<template>
  <div class="ml-[86px] mr-[86px] mt-[189px] relative">
    <div class="bg-customDarkBlue w-[100%] h-[577px] rounded-[10px]">
      <p class="text-white pt-[110px] text-[40px] font-black font-fraunces">
        Why choose us?
      </p>
      <p
        class="font-barlow text-base text-descriptionGray w-[540px] text-center mx-auto mt-[32px]"
      >
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>

    <div class="flex mt-[-224px]">
      <div class="w-[382px] h-[350px] bg-customGreen ml-[86px] rounded-[8px]">
        <img
          class="w-[71px] h-[72px] mx-auto mt-[72px]"
          :src="bean"
          alt="bean"
        />
        <p
          class="font-black text-2xl font-fraunces text-descriptionGray mt-[56px]"
        >
          Best quality
        </p>
        <p
          class="font-barlow text-base font-normal text-descriptionGray w-[255px] text-center mx-auto mt-[24px]"
        >
          Discover an endless variety of the world’s best artisan coffee from
          each of our roasters.
        </p>
      </div>

      <div
        class="w-[382px] h-[350px] bg-customGreen ml-[30px] mr-[30px] rounded-[8px]"
      >
        <img
          class="w-[72px] h-[72px] mx-auto mt-[72px]"
          :src="gift"
          alt="gift"
        />
        <p
          class="font-black text-2xl font-fraunces text-descriptionGray mt-[56px]"
        >
          Exclusive benefits
        </p>
        <p
          class="font-barlow text-base font-normal text-descriptionGray w-[255px] text-center mx-auto mt-[24px]"
        >
          Special offers and swag when you subscribe, including 30% off your
          first shipment.
        </p>
      </div>

      <div class="w-[382px] h-[350px] bg-customGreen mr-[86px] rounded-[8px]">
        <img
          class="w-[72px] h-[50px] mx-auto mt-[83px]"
          :src="truck"
          alt="truck"
        />
        <p
          class="font-black text-2xl font-fraunces text-descriptionGray mt-[67px]"
        >
          Free shipping
        </p>
        <p
          class="font-barlow text-base font-normal text-descriptionGray w-[255px] text-center mx-auto mt-[24px]"
        >
          We cover the cost and coffee is delivered fast. Peak freshness:
          guaranteed.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import bean from "@/assets/home/desktop/icon-coffee-bean.svg";
import gift from "@/assets/home/desktop/icon-gift.svg";
import truck from "@/assets/home/desktop/icon-truck.svg";
export default {
  name: "AppChoose",
  data() {
    return {
      bean,
      gift,
      truck,
    };
  },
};
</script>

<style></style>
