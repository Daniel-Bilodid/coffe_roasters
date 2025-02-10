<template>
  <div class="mt-[206px] relative">
    <div
      class="bg-customDarkBlue h-[652px] sm:w-[100%] md:h-[573px] rounded-[10px]"
    >
      <p
        class="text-white pt-[64px] xl:pt-[93px] text-[28px] sm:text-[32px] xl:text-[40px] font-black font-fraunces"
      >
        Why choose us?
      </p>
      <p
        class="font-barlow text-base text-descriptionGray w-[279px] md:w-[529px] text-center mx-auto mt-[30px] opacity-[0.8]"
      >
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
    </div>

    <div
      class="flex flex-col items-center xl:flex-row mt-[-304px] xl:mt-[-224px] gap-[24px] xl:gap-0 md:justify-center"
    >
      <div
        v-for="card in chooseCards"
        :key="card.id"
        class="w-[279px] h-[382px] sm:w-[90%] sm:h-[180px] xl:w-[350px] xl:h-[382px] bg-customGreen mx-[15px] rounded-[8px] flex flex-col sm:flex-row xl:block"
      >
        <img
          class="xl:mx-auto mx-auto sm:ml-[70.5px] mt-[62px] xl:mt-[72px]"
          :src="card.icon"
          :alt="card.title"
          :style="{
            width: card.id === 3 ? '70px' : '71px',
            height: card.id === 3 ? '51px' : '72px',
            marginTop: card.id === 3 ? '78px' : '69px',
          }"
        />
        <div>
          <p
            class="font-black text-2xl font-fraunces text-descriptionGray mt-[41px] xl:mt-[56px] text-center md:text-left xl:text-center md:ml-[55.5px] xl:ml-0"
            :style="{
              marginTop: card.id === 3 ? '68px' : '',
            }"
          >
            {{ card.title }}
          </p>
          <p
            class="font-barlow text-base text-center md:text-left font-normal text-descriptionGray w-[81%] md:ml-[55.5px] mb-[41px] xl:mb-0 xl:ml-[46px] xl:w-[255px] xl:text-center mx-auto mt-[24px]"
          >
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chooseCards } from "@/data/choose.js";

export default {
  name: "AppChoose",
  data() {
    return {
      chooseCards,
    };
  },
};
</script>

<style></style>
