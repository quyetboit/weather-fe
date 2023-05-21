<template>
  <div class="relative">
    <input :type="type" :value="value" :placeholder="placeholder" />

    <span class="icon absolute">
      <slot name="icon" />
    </span>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: [Number, String],
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
input {
  height: 32px;
  width: 260px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: var(--second-bg-color);
  padding: 0 28px 0 10px;
  line-height: 1;
}

.icon {
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-bg-color);
  font-size: 1.8rem;
}
</style>
