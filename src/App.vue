<template>
  <div class="d-flex">
    <SidebarComponent />

    <div class="w-100">
      <HeaderComponent />
      <div class="main">
        <div class="content">
          <router-view></router-view>
        </div>
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

<style scoped>
.main {
  margin-top: var(--height-header);
  background: rgba(0, 0, 0, 0.04);
  min-height: calc(100vh - var(--height-header));
  display: flex;
}

.content {
  background: var(--theme-background-1);
  flex: 1;
  border-radius: 4px;
}
</style>
