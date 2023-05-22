<template>
  <div class="card-sun">
    <h1 class="title">{{ title }}</h1>
    <div
      class="main d-flex flex-column ai-center"
      :style="{
        width: size === 'small' ? '105px' : '130px',
        height: size === 'small' ? '210px' : '230px',
      }"
    >
      <img
        class="image-clock"
        :src="requireImage('images/clock.png')"
        alt="clock"
      />
      <span class="time-from">{{ timeFrom }}</span>
      <span class="time-to">{{ timeTo }}</span>
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

    timeFrom: {
      type: String,
      required: true,
    },

    timeTo: {
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
}
.time-to {
}
</style>
