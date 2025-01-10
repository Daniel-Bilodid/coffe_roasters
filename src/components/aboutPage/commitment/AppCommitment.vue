<template>
  <div class="flex justify-center gap-[125px] mt-[168px]">
    <div>
      <img
        class="w-[445px] h-[520px] rounded-[8px]"
        :src="commitment"
        alt="guy making a cup of coffe"
      />
    </div>
    <div>
      <div
        class="w-[357px] h-[48px] font-fraunces font-black text-customBlack text-[40px] text-left mt-[90px] mb-[32px]"
      >
        Our commitment
      </div>

      <div
        class="w-[540px] h-[260px] font-barlow text-base text-customBlack opacity-[0.8] text-left"
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
      </div>
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
