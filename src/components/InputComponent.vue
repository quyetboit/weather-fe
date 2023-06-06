<template>
  <div class="wrap-input-component relative">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    />

    <span class="icon absolute">
      <slot name="icon" />
    </span>

    <ul class="data-auto-complete" v-if="isShowResultAutoComplete">
      <template v-if="dataAutoComplete.length">
        <li
          v-for="(item, index) in dataAutoComplete"
          :key="index"
          :title="item.name"
          @click="onSelectLocation(item.placeId, item.name)"
        >
          {{ item.name }}
        </li>
      </template>

      <template v-else>
        <li>No data found</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUnmounted, computed, ref } from "vue";
import { useStore } from "vuex";
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
  setup(props, { emit }) {
    const store = useStore();
    const isShowResultAutoComplete = ref(false);

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    function onInput(e) {
      isShowResultAutoComplete.value = true;
      emit("updateValue", e.target.value);
      console.log("value input: ", props.value);
    }

    function onSelectLocation(placeId, address) {
      isShowResultAutoComplete.value = false;
      store.dispatch("retrievedWeatherInfoByPlaceId", { placeId });
      emit("updateValue", address);
    }

    function handleClickOutside(event) {
      if (!event.target.closest(".wrap-input-component")) {
        isShowResultAutoComplete.value = false;
      }
    }

    const dataAutoComplete = computed(() => {
      return store.state.dataAutoComplete;
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      onInput,
      onSelectLocation,
      dataAutoComplete,
      isShowResultAutoComplete,
    };
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

.data-auto-complete {
  position: absolute;
  background: #fff;
  margin: 0;
  list-style: none;
  left: 0;
  right: 0;
  top: calc(100% + 6px);
  padding: 6px 0;
  border-radius: 8px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.4);
}

.data-auto-complete li {
  padding: 4px 10px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;
}

.data-auto-complete li:hover {
  background: var(--primary-bg-color-hover);
}
</style>
