<template>
  <div class="card">
    <TemperatureUnit :temperature="23" :size="'small'" />
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
</style>
