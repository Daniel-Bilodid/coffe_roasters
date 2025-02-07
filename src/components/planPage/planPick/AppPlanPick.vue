<template>
  <div class="flex mt-[168px]">
    <div>
      <ul class="w-[255px] h-[356px] ml-[85px]">
        <li
          :class="[
            selectedIndex === 0
              ? 'text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer]',
          ]"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >01</span
          >
          Preferences
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          :class="[
            selectedIndex === 1
              ? 'text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer]',
          ]"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >02</span
          >
          Bean Type
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          :class="[
            selectedIndex === 2
              ? 'text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer]',
          ]"
        >
          <span
            class="font-fraunces text-2xl font-black text-customGray mr-[28.5px]"
            >03</span
          >
          Quantity
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          :class="[
            selected
              ? 'text-left font-fraunces text-2xl font-black  cursor-pointer opacity-[0.2]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer' &&
                selectedIndex === 3
              ? 'text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer]',
          ]"
        >
          <span class="font-fraunces text-2xl font-black mr-[28.5px]">04</span>
          Grind Option
        </li>
        <div class="w-full h-[1px] bg-customGray mt-[24px] mb-[24px]"></div>
        <li
          :class="[
            selectedIndex === 4
              ? 'text-left font-fraunces text-2xl font-black text-customBlack cursor-pointer]'
              : 'text-left font-fraunces text-2xl font-black text-customGray cursor-pointer]',
          ]"
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
            :class="[
              selected && sectionIndex === 3
                ? 'font-fraunces text-[40px] font-black text-customGray text-left mb-[88px] cursor-pointer opacity-[0.5] mt-[-5px] tracking-[0.8px]'
                : 'font-fraunces text-[40px] font-black text-customGray text-left mb-[88px] cursor-pointer mt-[-5px] tracking-[0.8px]',
            ]"
            @click="toggleSection(sectionIndex)"
          >
            {{ section.title }}
          </h2>

          <img
            :class="[
              expandedSections[sectionIndex]
                ? 'rotate-180 w-[18.19px] h-[11.92px] mt-[30px]'
                : 'rotate-0 w-[18.19px] h-[11.92px] mt-[30px]',
            ]"
            :src="iconArrow"
            alt="arrow icon"
          />
        </div>

        <div
          v-if="expandedSections[sectionIndex]"
          class="flex flex-row gap-[23px] mt-[-40px]"
        >
          <div
            v-for="(card, cardIndex) in section.cards"
            :key="cardIndex"
            :class="[
              'w-[228px] h-[250px] rounded-[8px] cursor-pointer mb-[87px] hover:bg-customHover',
              selectedCards[sectionIndex] === (card.orderTitle || card.title)
                ? 'bg-customGreen'
                : 'bg-customCream',
            ]"
            @click="
              selectCard(
                sectionIndex,
                card.orderTitle ? card.orderTitle : card.title
              )
            "
          >
            <div
              :class="[
                'font-fraunces font-black text-2xl mt-[32px] ml-[28px] text-left ',
                selectedCards[sectionIndex] === (card.orderTitle || card.title)
                  ? 'text-white'
                  : 'text-black',
              ]"
            >
              {{ card.title }}
            </div>
            <div
              :class="[
                'font-barlow text-base text-customBlack text-left mt-[24px] ml-[28px] w-[172px] h-[78px]',
                selectedCards[sectionIndex] === (card.orderTitle || card.title)
                  ? 'text-white '
                  : 'text-black',
              ]"
            >
              {{ card.description }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-[730px] h-[208px] bg-customDarkBlue rounded-[10px] mt-[-25px]"
      >
        <div
          class="text-white opacity-[0.5] font-barlow text-base uppercase text-left ml-[64px] mt-[47px]"
        >
          Order Summary
        </div>
        <div
          class="w-[602px] h-[80px] ml-[64px] mr-[64px] text-white font-fraunces font-black text-[24px] text-left mt-[12px] tracking-[0.5px]"
        >
          “I drink my coffee <span>{{ selected ? "using " : "as " }}</span>
          <span class="text-customGreen">{{ selectedCards[0] || "_____" }}</span
          >, with a
          <span class="text-customGreen">{{
            selectedCards[1] || "_____"
          }}</span>
          type of bean.
          <span class="text-customGreen">{{
            selectedCards[2] || "_____"
          }}</span>
          <span :class="[selected ? 'hidden' : 'visible']"> ground ala </span>
          <span
            :class="[
              selected ? 'text-customGreen hidden' : 'text-customGreen visible',
            ]"
            >{{ selectedCards[3] || "_____" }}</span
          >, sent to me
          <span class="text-customGreen">{{ selectedCards[4] || "_____" }}</span
          >”
        </div>
      </div>
      <div class="flex justify-end mt-[40px]">
        <button
          class="w-[217px] h-[56px] rounded-[6px] bg-customGreen font-fraunces text-[18px] font-black text-center text-descriptionGray mr-0"
          @click="checkForm(selectedCards)"
        >
          Create my plan!
        </button>
      </div>
    </div>
  </div>
  <AppPlanModal
    v-if="appModal"
    :modalToggle="appModal"
    @close="appModal = false"
    :clearModal="clearModal"
  >
    <div
      class="w-[428px] ml-[64px] mr-[64px] text-customTextGray font-fraunces font-black text-[24px] mt-[57px] text-left"
    >
      “I drink my coffee <span>{{ selected ? "using" : "as" }}</span>
      <span class="text-customGreen">{{ selectedCards[0] || "_____" }}</span
      >, with a
      <span class="text-customGreen">{{ selectedCards[1] || "_____" }}</span>
      type of bean.
      <span class="text-customGreen">{{ selectedCards[2] || "_____" }}</span>
      <span :class="[selected ? 'hidden' : 'visible']"> ground ala </span>
      <span
        :class="[
          selected ? 'text-customGreen hidden' : 'text-customGreen visible',
        ]"
        >{{ selectedCards[3] || "_____" }}</span
      >, sent to me
      <span class="text-customGreen">{{ selectedCards[4] || "_____" }}</span
      >”
    </div>
  </AppPlanModal>
</template>

<script>
import { ref } from "vue";
import { coffeeOptions } from "@/data/coffeOptions";
import { listOptions } from "@/data/listOptions";
import iconArrow from "@/assets/plan/desktop/icon-arrow.svg";

import AppPlanModal from "../planModal/AppPlanModal.vue";

export default {
  name: "AppPlanPick",
  components: {
    AppPlanModal,
  },
  setup() {
    const expandedSections = ref(Array(coffeeOptions.length).fill(false));
    const selectedCards = ref(Array(coffeeOptions.length).fill("_____"));

    const selected = ref(false);
    const selectedIndex = ref();
    const appModal = ref(false);

    const toggleSection = (sectionIndex) => {
      selectedIndex.value = sectionIndex;

      const updatedSections = expandedSections.value.map((expanded, index) => {
        if (index === 3 && selected.value) {
          return false;
        }
        return index === sectionIndex ? !expanded : expanded;
      });

      expandedSections.value = updatedSections;
    };

    const clearModal = () => {
      console.log(selectedCards.value);
      selectedCards.value = Array(coffeeOptions.length).fill("_____");
    };

    console.log(expandedSections.value);
    const selectCard = (sectionIndex, cardTitle) => {
      if (sectionIndex === 0) {
        selected.value = cardTitle === "Capsules";
      }

      selectedCards.value[sectionIndex] = cardTitle;
      selectedIndex.value = sectionIndex;
    };

    const checkForm = (cards) => {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i] === "_____" && i !== 3) {
          return false;
        } else {
          return (appModal.value = true);
        }
      }
    };

    return {
      coffeeOptions,
      listOptions,
      iconArrow,
      expandedSections,
      selectedCards,
      toggleSection,
      selectCard,
      selected,
      selectedIndex,
      appModal,
      clearModal,
      checkForm,
    };
  },
};
</script>
