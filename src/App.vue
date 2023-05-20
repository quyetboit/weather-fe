<template>
  <div class="d-flex">
    <SidebarComponent />

    <div class="content">
      <HeaderComponent />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./layouts/HeaderComponent.vue";
import SidebarComponent from "./layouts/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SidebarComponent,
  },
};
</script>

<style scoped></style>
