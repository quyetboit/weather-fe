<template>
  <div>
    <img :src="requireImage('images/weather-icon-night.png')" alt="" />
  </div>
</template>

<script>
export default {
  name: "CloudComponent",
  setup() {
    const requireImage = (link) => {
      return require(`@/assets/${link}`);
    };

    return {
      requireImage,
    };
  },
};
</script>

<style scoped>
img {
  height: 90px;
  width: auto;
}
</style>
