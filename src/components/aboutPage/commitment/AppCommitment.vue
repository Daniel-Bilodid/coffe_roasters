<template>
  <div
    class="flex flex-col lg:flex-row items-center lg:justify-center lg:gap-[125px] mt-[100px] lg:mt-[168px] px-[5.5rem]"
  >
    <div class="w-full flex justify-center">
      <img
        class="w-[280px] h-[320px] md:w-[445px] md:h-[520px] rounded-[8px]"
        :src="commitment"
        alt="guy making a cup of coffee"
      />
    </div>
    <div class="mt-[40px] lg:mt-[-23px] text-center lg:text-left">
      <h2
        class="w-full font-fraunces font-black text-customBlack text-[28px] md:text-[32px] lg:text-[40px] mb-[16px] lg:mb-[26px] lg:mt-[15px]"
      >
        Our commitment
      </h2>
      <p
        class="w-full md:w-[540px] font-barlow text-base text-customBlack opacity-[0.8] text-center lg:text-left leading-[26px]"
      >
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </p>
    </div>
  </div>
</template>

<script>
import commitment from "@/assets/about/desktop/image-commitment.jpg";
export default {
  name: "AppCommitment",
  data() {
    return {
      commitment,
    };
  },
};
</script>
