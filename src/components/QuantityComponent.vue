<script>
export default {
  name: "QuantityComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentValue: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div class="wraper" :style="{ '--ratio': currentValue / total }">
    <h3 class="title mb-8">{{ title }}</h3>
    <div class="level">
      <div class="inner"></div>
      <div class="ratio">
        <span class="ratio-number block">{{ currentValue }} / {{ total }}</span>
        <span class="ratio-modify block">
          <template v-if="currentValue / total >= 0.8">Critical</template>
          <template v-else-if="currentValue / total >= 0.6">Very high</template>
          <template v-else-if="currentValue / total >= 0.4">High</template>
          <template v-else-if="currentValue / total >= 0.2">Medium</template>
          <template v-else>Low</template>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wraper {
  --width: 160px;
  width: var(--width);
}
.title {
  color: white;
  font-weight: 400;
  text-align: center;
}
.level {
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  border: 4px solid rgba(134, 92, 253, 0.85);
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-45deg);
  position: relative;
}

.inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate(calc(180deg * var(--ratio)));
}

.inner::before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 14px;
  left: 14px;
}

.ratio {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-20%) rotate(45deg);
  color: white;
}
.ratio-number,
.ratio-modify {
  text-align: center;
}
</style>
