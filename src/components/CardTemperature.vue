<template>
  <div class="card d-flex flex-column ai-center jc-between">
    <TemperatureUnit :temperature="23" :size="'small'" />

    <img
      class="card__image-cloud"
      :src="requireImage('images/cloud-normal.png')"
      alt=""
    />

    <h3 class="card__days">Sun</h3>
  </div>
</template>

<script>
import TemperatureUnit from "@/components/TemperatrueUnit.vue";
export default {
  name: "CardTemperature",
  props: {},
  components: {
    TemperatureUnit,
  },
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
.card {
  width: 110px;
  height: 200px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(0.569258px);
  flex-shrink: 0;
  margin-right: 54px;
  padding: 10px 0;
}

.card__image-cloud {
  height: 30px;
  width: auto;
}

.card__days {
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 30px;
  color: #fff;
}
</style>
