import { createStore } from "vuex";
import * as types from "./types";

import VuexPersistence from "vuex-persist";
import { Pokemon } from "@/models/pokemon";

export default createStore({
  state: {
    favoritesList: new Array<Pokemon>(),
  },
  mutations: {
    [types.ADD_FAVORITE_POKEMON]: (state, data: Pokemon) => {
      state.favoritesList.push(data);
    },
    [types.DELETE_FAVORITE_POKEMON]: (state, data) => {
      state.favoritesList.splice(data, 1);
    },
  },
  getters: {
    getFavoritesList: (state) => {
      return state.favoritesList;
    },
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});
