<template>
  <div>
    <div
      class="w-[255px] h-[32px] text-left font-fraunces text-customGray font-black text-2xl mt-[168px]"
    >
      Our headquarters
    </div>

    <div class="mt-[72px] flex">
      <div>
        <img :src="uk" alt="United Kingdom" />
        <p
          class="w-[272px] h-[36px] text-left font-fraunces text-customBlack text-[32px] font-black mt-[45.93px]"
        >
          United Kingdom
        </p>
        <p
          class="w-[285px] h-[107] font-barlow text-base text-customBlack text-left mt-[24px]"
        >
          68 Asfordby Rd <br />
          Alcaston <br />
          SY6 1YA <br />
          +44 1241 918425
        </p>
      </div>

      <div class="ml-[108px]">
        <img :src="canada" alt="Canada" />
        <p
          class="w-[272px] h-[36px] text-left font-fraunces text-customBlack text-[32px] font-black mt-[45.93px]"
        >
          Canada
        </p>
        <p
          class="w-[285px] h-[107] font-barlow text-base text-customBlack text-left mt-[24px]"
        >
          1528 Eglinton Avenue <br />
          Toronto <br />
          Ontario M4P 1A6 <br />
          +1 416 485 2997
        </p>
      </div>

      <div class="ml-[108px]">
        <img :src="australia" alt="Australia" />
        <p
          class="w-[272px] h-[36px] text-left font-fraunces text-customBlack text-[32px] font-black mt-[45.93px]"
        >
          Australia
        </p>
        <p
          class="w-[285px] h-[107] font-barlow text-base text-customBlack text-left mt-[24px]"
        >
          36 Swanston Street <br />
          Kewell <br />
          Victoria <br />
          +61 4 9928 3629
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import uk from "@/assets/about/desktop/illustration-uk.svg";
import canada from "@/assets/about/desktop/illustration-canada.svg";
import australia from "@/assets/about/desktop/illustration-australia.svg";
export default {
  name: "AppHeadquarters",
  data() {
    return {
      uk,
      canada,
      australia,
    };
  },
};
</script>
