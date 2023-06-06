import { createStore } from "vuex";
import axios from "axios";

import { enviroment } from "@/env/enviroment";

export const weatherStore = createStore({
  state() {
    return {
      currentLocation: null,
      infoWeather: null,
      forecastWeather: [],
      loading: false,
      sunState: null,
      dataAutoComplete: [],
    };
  },

  getters: {},

  mutations: {
    setCurrentLocation(state, payload) {
      state.currentLocation = payload;
    },

    setInfoWeather(state, payload) {
      state.infoWeather = payload;
    },

    setSunState(state, payload) {
      state.sunState = payload;
    },

    setForecaseWeather(state, payload) {
      state.forecastWeather = payload;
    },

    setDataAutoCompleteAddress(state, payload) {
      state.dataAutoComplete = payload || [];
    },
  },

  actions: {
    setCurrentLocation(context, payload) {
      context.commit("setCurrentLocation", payload);
      axios
        .get(`${enviroment.baseUrl}/current.json`, {
          params: {
            q: `${payload.lat},${payload.lng}`,
            key: enviroment.apiKey,
            aqi: "yes",
          },
        })
        .then((res) => {
          if (res.status === 200 && res.data) {
            context.commit("setInfoWeather", res.data);
          }
        })
        .catch((err) => {
          console.log("Errors: ", err);
        });
    },

    getDataMarine(context, payload) {
      axios
        .get(`${enviroment.baseUrl}/marine.json`, {
          params: {
            q: `${payload.lat},${payload.lng}`,
            key: enviroment.apiKey,
          },
        })
        .then((res) => {
          let sunStateData = res.data.forecast.forecastday[0].astro;
          context.commit("setSunState", sunStateData);
        })
        .catch((errors) => console.log("Has errors: ", errors));
    },

    retrievedAddressAutoComplete(context, payload) {
      axios
        .get(`${enviroment.baseUrlViettelMap}/place-api/autocomplete`, {
          params: {
            input: payload.address,
            key: enviroment.apiKeyViettelMap,
          },
        })
        .then((res) => {
          const dataConvert = res.data.predictions.map((item) => ({
            name: item.description,
            placeId: item.place_id,
          }));

          context.commit("setDataAutoCompleteAddress", dataConvert);
        })
        .catch((errors) => console.log("Has errors: ", errors));
    },

    retrievedWeatherInfoByPlaceId(context, { placeId }) {
      axios
        .get(`${enviroment.baseUrlViettelMap}/place-api/geocode`, {
          params: {
            place_id: placeId,
            key: enviroment.apiKeyViettelMap,
          },
        })
        .then((res) => {
          console.log("Ress get location form place id: ", res);
          if (res.status === 200 && res.data.results.length) {
            const location = res.data.results[0].geometry.location;
            context.dispatch("setCurrentLocation", location);
            context.dispatch("getDataMarine", location);
          }
        })
        .catch((errors) => console.log("Has errors: ", errors));
    },
  },
});
