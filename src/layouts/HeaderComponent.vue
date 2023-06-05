<template>
  <div class="header d-flex ai-center jc-between pl-20 pr-20">
    <div class="header__left d-flex">
      <img
        src="data:image/jpeg;base64,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"
        alt="Avatar"
        class="header__avatar"
      />
      <span class="header__info ml-8 d-flex flex-column">
        <span class="fs-14">Hello,</span>
        <span class="fs-18 fw-600">Son Tung M-tp</span>
      </span>
    </div>

    <div class="header__right d-flex ai-center">
      <InputComponent
        :placeholder="'Search anything ...'"
        @updateValue="onUpdateValue"
      >
        <template v-slot:icon>
          <ion-icon name="search-outline"></ion-icon>
        </template>
      </InputComponent>
      <span class="icon-notify ml-8">
        <ion-icon name="notifications-outline"></ion-icon>
      </span>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import { useStore } from "vuex";

export default {
  name: "HeaderComponent",
  components: {
    InputComponent,
  },
  setup() {
    const store = useStore();
    let timeOutId = null;
    function onUpdateValue(value) {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => {
        store.dispatch("retrievedAddressAutoComplete", { address: value });
      }, 500);
    }
    return {
      onUpdateValue,
    };
  },
};
</script>

<style>
.header {
  height: var(--height-header);
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: var(--width-sidebar);
  z-index: 999;
}

.header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.icon-notify {
  font-size: 2.4rem;
  color: var(--primary-bg-color);
  cursor: pointer;
}
</style>
