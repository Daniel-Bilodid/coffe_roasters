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
          Deliveries
        </li>
      </ul>
    </div>

    <div class="flex flex-col ml-[125px]">
      <div
        v-for="(section, sectionIndex) in coffeeOptions"
        :key="sectionIndex"
        class="section"
      >
        <div class="flex justify-between">
          <h2
            class="font-fraunces text-[40px] font-black text-customGray text-left mb-[56px] cursor-pointer"
            @click="toggleSection(sectionIndex)"
          >
            {{ section.title }}
          </h2>
          <img
            class="w-[18.19px] h-[11.92px] mt-[30px]"
            :src="iconArrow"
            alt="arrow icon"
          />
        </div>

        <div
          v-if="expandedSections[sectionIndex]"
          class="flex flex-row gap-[23px]"
        >
          <div
            v-for="(card, cardIndex) in section.cards"
            :key="cardIndex"
            :class="[
              'w-[228px] h-[250px] rounded-[8px] cursor-pointer mb-[88px] hover:bg-customHover',
              selectedCards[sectionIndex] === card.title
                ? 'bg-customGreen'
                : 'bg-customCream',
            ]"
            @click="selectCard(sectionIndex, card.title)"
          >
            <div
              :class="[
                'font-fraunces font-black text-2xl mt-[32px] ml-[28px] text-left ',
                selectedCards[sectionIndex] === card.title
                  ? 'text-white '
                  : 'text-black',
              ]"
            >
              {{ card.title }}
            </div>
            <div
              :class="[
                'font-barlow text-base text-customBlack text-left mt-[24px] ml-[28px] w-[172px] h-[78px]',
                selectedCards[sectionIndex] === card.title
                  ? 'text-white '
                  : 'text-black',
              ]"
            >
              {{ card.description }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-[730px] h-[208px] bg-customDarkBlue rounded-[10px]">
        <div
          class="text-white opacity-[0.5] font-barlow text-base uppercase text-left ml-[64px] mt-[31px]"
        >
          Order Summary
        </div>
        <div
          class="ml-[64px] mr-[64px] text-white font-fraunces font-black text-[24px]"
        >
          “I drink my coffee as
          <span class="text-customGreen">{{ selectedCards[0] || "..." }}</span
          >, with a
          <span class="text-customGreen">{{ selectedCards[1] || "..." }}</span>
          type of bean.
          <span class="text-customGreen">{{ selectedCards[2] || "..." }}</span>
          ground ala
          <span class="text-customGreen">{{ selectedCards[3] || "..." }}</span
          >, sent to me
          <span class="text-customGreen">{{ selectedCards[4] || "..." }}</span
          >”
        </div>
      </div>
      <button>Click</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { coffeeOptions } from "@/data/coffeOptions";

import iconArrow from "@/assets/plan/desktop/icon-arrow.svg";

export default {
  name: "AppPlanPick",
  setup() {
    const expandedSections = ref(Array(coffeeOptions.length).fill(false));
    const selectedCards = ref(Array(coffeeOptions.length).fill("..."));

    let selected;
    const toggleSection = (sectionIndex) => {
      expandedSections.value = expandedSections.value.map((expanded, index) =>
        index === sectionIndex ? !expanded : expanded
      );
    };

    const selectCard = (sectionIndex, cardTitle) => {
      selectedCards.value[sectionIndex] = cardTitle;
      selected = cardTitle;

      if (sectionIndex === 0 && cardTitle === "Capsule") {
        console.log("yes", expandedSections.value[3]);
        expandedSections.value[3] = false;
      }
    };

    return {
      coffeeOptions,
      iconArrow,
      expandedSections,
      selectedCards,
      toggleSection,
      selectCard,
      selected,
    };
  },
};
</script>
