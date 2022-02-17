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
      console.log('ADD');
      console.log(data)
      state.favoritesList.push(data);
    },
    [types.DELETE_FAVORITE_POKEMON]: (state, data) => {
      console.log('DEL');
      console.log(data)
      console.log(state.favoritesList.findIndex(element => element.name === data.name))
      const index = state.favoritesList.findIndex(element => element.name === data.name)
      state.favoritesList.splice(index, 1);
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
