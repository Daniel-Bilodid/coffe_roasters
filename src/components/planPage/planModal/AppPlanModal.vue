<template>
  <div>
    <div class="w-[540px] h-[597px] bg-customPink rounded-[8px]">
      <div
        class="w-full h-[136px] bg-customDarkBlue text-white text-[40px] font-fraunces font-black pl-[56px] pt-[45px] text-left"
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
          class="w-[217px] h-[56px] rounded-[6px] bg-customGreen font-fraunces text-[18px] font-black text-descriptionGray"
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
};
</script>
