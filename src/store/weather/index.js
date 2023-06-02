import { createStore } from "vuex";
import axios from "axios";

import { enviroment } from "@/env/enviroment";

export const weatherStore = createStore({
  state() {
    return {
      currentLocation: null,
      infoWeather: null,
      loading: false,
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
  },

  actions: {
    setCurrentLocation(context, payload) {
      context.commit("setCurrentLocation", payload);
      axios
        .get(`${enviroment.baseUrl}/current.json`, {
          params: {
            q: `${payload.lat},${payload.lng}`,
            key: enviroment.apiKey,
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
  },
});
