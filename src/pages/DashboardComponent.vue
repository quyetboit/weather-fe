<template>
  <div v-if="infoWeather" class="dashboard d-flex">
    <div class="dashboard__left d-flex flex-column jc-between">
      <CloudComponent :hours="infoLastUpdateTime.hours" />

      <div class="temperature">
        <TemperatureUnit
          :temperature="infoWeather.current.temp_c"
          size="126px"
        />
      </div>

      <div class="days d-flex flex-column">
        <span class="days__date">{{ infoLastUpdateTime.date }}</span>
        <div class="days__weakdays">
          <span>{{ infoLastUpdateTime.time }}</span>
        </div>
      </div>

      <div class="weather-info">
        <div class="weather-info__item">
          <ion-icon
            class="weather-info__icon"
            name="speedometer-outline"
          ></ion-icon>
          <span class="weather-info__label">Wind</span>
          <span class="weather-info__value"
            >{{ infoWeather.current.wind_kph }}Km/h</span
          >
          <span class="separate-y"></span>
        </div>

        <div class="weather-info__item">
          <ion-icon class="weather-info__icon" name="water-outline"></ion-icon>
          <span class="weather-info__label">Hum</span>
          <span class="weather-info__value"
            >{{ infoWeather.current.humidity }}%</span
          >
          <span class="separate-y"></span>
        </div>

        <div class="weather-info__item">
          <ion-icon class="weather-info__icon" name="rainy-outline"></ion-icon>
          <span class="weather-info__label">Rain</span>
          <span class="weather-info__value"
            >{{ infoWeather.current.precip_mm }} mm</span
          >
        </div>
      </div>

      <div class="weather-future d-flex">
        <CardTemperature />
        <CardTemperature />
        <CardTemperature />
      </div>
    </div>
    <div class="dashboard__right d-flex flex-column jc-between">
      <div class="right__head d-flex ai-center">
        <ion-icon name="location-outline"></ion-icon>
        <h3 class="right__head-location ml-8">
          {{ infoWeather.location.name }}, {{ infoWeather.location.country }}
        </h3>
      </div>

      <div class="right__card-son d-flex jc-between ai-end">
        <CardSunTracking
          v-for="(sun, index) in sunTrackingConfig"
          :key="index"
          :size="sun.size"
          :time="sun.time"
          :title="sun.title"
        />
      </div>

      <div class="right__card-separate d-flex ai-center">
        <div class="separate flex-1"></div>
        <span class="wrap-icon ml-8">
          <ion-icon name="information-outline"></ion-icon>
        </span>
      </div>

      <div class="right__card-footer d-flex jc-between">
        <QuantityComponent
          :title="'Air Quality'"
          :currentValue="infoWeather.current.air_quality['us-epa-index']"
          :total="6"
        />

        <QuantityComponent
          :title="'UIV Index'"
          :currentValue="infoWeather.current.uv"
          :total="10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloudComponent from "@/components/CloudComponent.vue";
import CardTemperature from "@/components/CardTemperature.vue";
import TemperatureUnit from "@/components/TemperatrueUnit.vue";
import CardSunTracking from "@/components/CardSunTracking.vue";
import QuantityComponent from "@/components/QuantityComponent.vue";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "DashboardComponent",
  components: {
    CloudComponent,
    CardTemperature,
    TemperatureUnit,
    CardSunTracking,
    QuantityComponent,
  },
  setup() {
    const store = useStore();
    const location = computed(() => store.state.currentLocation);
    const infoWeather = computed(() => {
      const currentData = store.state.infoWeather;
      return currentData;
    });

    const infoLastUpdateTime = computed(() => {
      const lastUpdated = store.state.infoWeather.current.last_updated;
      const currentDate = new Date(lastUpdated);
      const date = currentDate.toDateString();

      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();

      let formattedHours = hours < 10 ? "0" + hours : hours;
      let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

      let time = formattedHours + ":" + formattedMinutes;

      return {
        date,
        time,
        hours,
      };
    });

    const sunTrackingConfig = computed(() => {
      let currentSunSate = store.state.sunState;
      return [
        { title: "Sunrise", size: "small", time: currentSunSate?.sunrise },
        { title: "Moonrise", size: "large", time: currentSunSate?.moonrise },
        { title: "Sunriset", size: "small", time: currentSunSate?.sunset },
      ];
    });

    onMounted(() => {
      getCurrentLocation();
    });

    function getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        store.dispatch("setCurrentLocation", {
          lat: coords.latitude,
          lng: coords.longitude,
        });

        store.dispatch("getDataMarine", {
          lat: coords.latitude,
          lng: coords.longitude,
        });
      });
    }

    return {
      getCurrentLocation,
      location,
      infoWeather,
      infoLastUpdateTime,
      sunTrackingConfig,
    };
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
  overflow: hidden;
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

.right__card-separate .separate {
  border-top: 2px solid white;
}

.right__card-separate ion-icon {
  color: white;
  font-size: 3rem;
}

.right__card-separate .wrap-icon {
  transform: rotateZ("5deg");
  display: flex;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 50%;
}
</style>
