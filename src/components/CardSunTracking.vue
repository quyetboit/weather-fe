<template>
  <div class="card-sun" :class="{ 'mb-12': size !== 'small' }">
    <h1 class="title mb-8">{{ title }}</h1>
    <div
      class="main d-flex flex-column ai-center jc-between"
      :style="{
        width: size === 'small' ? '85px' : '102px',
        height: size === 'small' ? '190px' : '220px',
      }"
    >
      <img
        class="image-clock"
        :src="requireImage('images/clock.png')"
        alt="clock"
      />
      <span class="wrap-time d-flex flex-column ai-center">
        <span class="time-from">{{ time }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSunTracking",
  props: {
    size: {
      type: String,
      default: "small",
    },

    title: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
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
.card-sun {
}

.title {
  font-size: 2rem;
  color: white;
  text-align: center;
}
.main {
  background: rgba(255, 255, 255, 0.26);
  border-radius: 999px;
  padding: 36px 0;
}
.image-clock {
  width: 70%;
  height: auto;
}
.time-from {
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  display: block;
  max-width: 100%;
  padding: 0 16px;
}
.time-to {
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
}
</style>
