<template>
  image links: {{ imageCloudByState }}
  <div>
    <img :src="requireImage(imageCloudByState)" alt="" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "CloudComponent",
  props: {
    hours: {
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const requireImage = (link) => {
      return require(`@/assets/${link}`);
    };

    const imageCloudByState = computed(() => {
      if (props.hours >= 6 && props.hours <= 18) {
        return "images/weather-icon-morning.png";
      } else {
        return "images/weather-icon-night.png";
      }
    });

    return {
      requireImage,
      imageCloudByState,
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
