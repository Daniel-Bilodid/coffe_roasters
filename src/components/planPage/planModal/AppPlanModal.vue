<template>
  <div class="relative w-screen h-screen inset-0">
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="$emit('close')"
    ></div>
    <div
      class="w-[540px] h-[597px] bg-descriptionGray rounded-[8px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div
        class="w-full h-[136px] bg-customDarkBlue text-white text-[40px] font-fraunces font-black pl-[56px] pt-[45px] text-left rounded-t-[8px]"
      >
        Order Summary
      </div>

      <slot></slot>

      <div
        class="w-[428px] h-[78px] opacity-[0.8] font-barlow text-customBlack text-base text-left mx-auto mt-[10px]"
      >
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </div>

      <div class="flex justify-center gap-[19px] mt-[47px]">
        <div class="font-fraunces text-customBlack font-black text-[32px]">
          $14.00/ mo
        </div>
        <button
          class="w-[217px] h-[56px] rounded-[6px] bg-customGreen font-fraunces text-[18px] font-black text-descriptionGray hover:bg-customBtnHover"
          @click="$emit('close')"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPlanModal",
  props: {
    modalToggle: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
};
</script>
