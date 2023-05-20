<template>
  <div class="sidebar">
    <div class="logo d-flex flex-column ai-center jc-center">
      <ion-icon name="cloudy-outline"></ion-icon>
      <span>QuyetBoit</span>
    </div>

    <div class="nav-bar d-flex flex-column jc-between ai-center">
      <ul class="menu-list">
        <li class="menu-item active">
          <ion-icon name="grid-outline"></ion-icon>
        </li>
        <li class="menu-item">
          <ion-icon name="analytics-outline"></ion-icon>
        </li>
        <li class="menu-item">
          <ion-icon name="location-outline"></ion-icon>
        </li>
        <li class="menu-item">
          <ion-icon name="calendar-outline"></ion-icon>
        </li>
        <li class="menu-item">
          <ion-icon name="settings-outline"></ion-icon>
        </li>
      </ul>

      <div class="menu-item icon-logout">
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 80px;
  height: 100vh;
}

.logo {
  height: var(--height-header);
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
