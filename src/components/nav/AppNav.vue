<template>
  <img :src="logo" alt="coffe logo" />
  <div>NAV</div>
</template>

<script>
import logo from "../../assets/shared/desktop/logo.svg";
export default {
  name: "AppNav",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
