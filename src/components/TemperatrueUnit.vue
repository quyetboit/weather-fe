<template>
  <div
    class="relative inline-block"
    :style="{ 'font-size': size === 'small' ? '1.8rem' : size }"
  >
    <span class="temperature__number">{{ temperature }}</span>
    <span
      class="temperature__unit"
      :class="{ 'temperature__unit--normal': size === 'small' }"
      >{{ unit }}</span
    >
  </div>
</template>

<script>
export default {
  name: "TemperatureUnit",
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      default: "C",
    },
    size: {
      type: String,
      default: "16px",
    },
  },
};
</script>

<style scoped>
.temperature {
  display: inline-block;
}
.temperature__number {
  font-weight: 100;
  font-size: calc(1em);
  line-height: 120%;
  color: #ffffff;
}
.temperature__unit {
  font-weight: 400;
  font-size: calc(1em / 5.25);
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #ffffff;
  position: absolute;
  top: 2px;
  right: -4pc;
  transform: translateX(calc(100% + 6px));
}
.temperature__unit.temperature__unit--normal {
  font-size: calc(0.8 * 1em);
}
.temperature__unit::before {
  content: "o";
  font-size: calc(1em / 2);
  letter-spacing: -0.05em;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: -2px;
  transform: translateX(-100%);
  line-height: 1;
}
</style>
