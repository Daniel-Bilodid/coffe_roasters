<template>
  <div class="flex mt-[168px]">
    <div>
      <ul class="w-[255px] h-[356px] ml-[85px]">
        <li
          class="text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >01</span
          >
          Preferences
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          class="text-left font-fraunces text-2xl font-black text-customGray cursor-pointer"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >02</span
          >
          Bean Type
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          class="text-left font-fraunces text-2xl font-black text-customGray cursor-pointer"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >03</span
          >
          Quantity
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          class="text-left font-fraunces text-2xl font-black text-customGray cursor-pointer"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >04</span
          >
          Grind Option
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          class="text-left font-fraunces text-2xl font-black text-customGray cursor-pointer"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >05</span
          >
          Deliveriers
        </li>
      </ul>
    </div>

    <div class="flex flex-col ml-[125px]">
      <div
        v-for="(section, index) in coffeOptions"
        :key="index"
        class="section"
      >
        <h2 class="font-fraunces text-[40px] font-black text-customGray">
          {{ section.title }}
        </h2>

        <div class="flex flex-row gap-[23px]">
          <div
            v-for="(card, index) in section.cards"
            :key="index"
            class="w-[228px] h-[250px] rounded-[8px] bg-customCream cursor-pointer"
          >
            <div
              class="font-fraunces font-black text-2xl mt-[32px] ml-[28px] text-left"
            >
              {{ card.title }}
            </div>
            <div
              class="font-barlow text-base text-customBlack text-left mt-[24px] ml-[28px] w-[172px] h-[78px]"
            >
              {{ card.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { coffeOptions } from "@/data/coffeOptions";

export default {
  name: "AppPlanPick",
  data() {
    return {
      coffeOptions,
    };
  },
};
</script>
