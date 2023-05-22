<template>
  <div class="dashboard d-flex">
    <div class="dashboard__left d-flex flex-column jc-between">
      <CloudComponent />

      <div class="temperature">
        <TemperatureUnit :temperature="27" size="126px" />
      </div>

      <div class="days d-flex flex-column">
        <span class="days__date">17th Jun'21</span>
        <div class="days__weakdays">
          <span>Thursday</span>
          <span class="separate-y"></span>
          <span>2:40 AM</span>
        </div>
      </div>

      <div class="weather-info">
        <div class="weather-info__item">
          <ion-icon
            class="weather-info__icon"
            name="speedometer-outline"
          ></ion-icon>
          <span class="weather-info__label">Wind</span>
          <span class="weather-info__value">10KM/h</span>
          <span class="separate-y"></span>
        </div>

        <div class="weather-info__item">
          <ion-icon class="weather-info__icon" name="water-outline"></ion-icon>
          <span class="weather-info__label">Hum</span>
          <span class="weather-info__value">50%</span>
          <span class="separate-y"></span>
        </div>

        <div class="weather-info__item">
          <ion-icon class="weather-info__icon" name="rainy-outline"></ion-icon>
          <span class="weather-info__label">Rain</span>
          <span class="weather-info__value">0.2%</span>
        </div>
      </div>

      <div class="weather-future d-flex">
        <CardTemperature />
        <CardTemperature />
        <CardTemperature />
      </div>
    </div>
    <div class="dashboard__right">
      <div class="right__head d-flex ai-center">
        <ion-icon name="location-outline"></ion-icon>
        <h3 class="right__head-location ml-8">Ha Noi, Viet Nam</h3>
      </div>

      <div class="right__card-son"></div>
      <div class="right__card-separate"></div>
      <div class="right__card-footer"></div>
    </div>
  </div>
</template>

<script>
import CloudComponent from "@/components/CloudComponent.vue";
import CardTemperature from "@/components/CardTemperature.vue";
import TemperatureUnit from "@/components/TemperatrueUnit.vue";

export default {
  name: "DashboardComponent",
  components: {
    CloudComponent,
    CardTemperature,
    TemperatureUnit,
  },
};
</script>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
}
.dashboard__left {
  width: 66.666667%;
  height: 100%;
  padding: 30px;
}

.dashboard__right {
  flex: 1;
  height: 100%;
  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(21px);
  padding: 30px;
}

.days {
}

.days__date {
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
}

.days__weakdays {
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 120%;
  color: #ffffff;
  text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
}

.weather-info {
  display: flex;
}

.weather-info__item {
  font-size: 1.4rem;
  font-weight: 100;
  line-height: 120%;
  color: #ffffff;
  text-shadow: -1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.weather-info__icon {
  margin-right: 6px;
}

.weather-info__label {
  margin-right: 14px;
}

.weather-info__value {
}

.right__head {
  color: #ffffff;
}

.right__head ion-icon {
  font-size: 3rem;
}
</style>
