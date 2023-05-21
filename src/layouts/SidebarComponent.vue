<template>
  <div class="sidebar">
    <div class="logo d-flex flex-column ai-center jc-center">
      <ion-icon name="cloudy-outline"></ion-icon>
      <span>QuyetBoit</span>
    </div>

    <div class="nav-bar pt-20 pb-20 d-flex flex-column jc-between ai-center">
      <ul class="menu-list">
        <template v-for="(route, index) of menuConfig" :key="index">
          <router-link :to="{ name: route.routeName }">
            <li
              class="menu-item"
              :class="{ active: indexActive === index, 'mt-8': index !== 0 }"
            >
              <ion-icon :name="route.icon"></ion-icon>
            </li>
          </router-link>
        </template>
      </ul>

      <div class="menu-item icon-logout">
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiderbarComponent",
  setup() {
    const indexActive = 0;
    const menuConfig = [
      { icon: "grid-outline", routeName: "dashboard-route" },
      { icon: "analytics-outline", routeName: "analytics-route" },
      { icon: "location-outline", routeName: "location-route" },
      { icon: "calendar-outline", routeName: "calendar-route" },
      { icon: "settings-outline", routeName: "settings-route" },
    ];

    return {
      menuConfig,
      indexActive,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: var(--width-sidebar);
  height: 100vh;
}

.logo {
  height: var(--height-header);
  color: var(--primary-bg-color);
}

.logo ion-icon {
  font-size: 3.6rem;
}

.nav-bar {
  height: calc(100vh - var(--height-header));
}

.menu-list {
  list-style: none;
}
.menu-item {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-item:hover {
  background: var(--primary-bg-color-hover);
}

.menu-item + .menu-item {
  margin-top: 6px;
}

.menu-item ion-icon {
  font-size: 1.8rem;
}

.menu-item.active {
  background: var(--primary-bg-color);
  color: var(--primary-color);
}
</style>
