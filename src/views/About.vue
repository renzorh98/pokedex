<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/illustrations/welcome/pikachu.svg" />
    <div style="background: url('../assets/illustrations/pokemon-modal/background.svg') no-repeat center center">
    </div>
    <img src="../assets/icons/fav_active.svg" />
    <img src="../assets/icons/fav_disabled.svg" />
    <v-button>Get started</v-button>
    <v-button>Go back home</v-button>
    <br>
    <br>
    <img src="@/assets/icons/icon_search.svg"/>
    <input type="text">
    <br>
    <br>
    <v-control :icon="'icon_search.svg'">
      <input class="input" type="text">
    </v-control>
    <br>
    <br>
    <v-button size="big"><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All</v-button>
    <v-button size="big" :state="'disabled'"><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All</v-button>
    <v-button size="big" :state="'active'"><img src="../assets/icons/icon_fav.svg" />&nbsp;&nbsp;All</v-button>
    <v-list :list="pokemons" v-on:updateItem="updateItemByIndex" v-on:setItem="openModal"></v-list>
    <pokemon-modal :showModal="flagModal" :pokemon="pokemon" v-on:close="flagModal = false"
                   v-on:setFavorite="updateItemByObject"></pokemon-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import VButton from "@/components/v-button/v-button.vue";
import PokemonModal from "@/components/pokemon-modal/pokemon-modal.vue";
import VList from "@/components/v-list/v-list.vue";
import VControl from "@/components/v-control/v-control.vue";
import * as pokemonApi from "@/services/pokemonApi";
import { Pokemon } from "@/models/pokemon";
import { useStore } from "vuex";
import * as types from "@/store/types";


export default defineComponent({
  components: {
    VButton,
    VList,
    PokemonModal,
    VControl,
  },
  setup() {
    const flagModal = ref(false);

    const store = useStore();

    const pokemons = ref(Array<Pokemon>());

    const favList = ref(Array<Pokemon>());

    const pokemon = ref({ name: "", weight: 0, height: 0, image: "", types: [], favorite: false });

    const updateItemByIndex = (index: number) => {
      updateItem(index);
    };

    const updateItemByObject = (item: any) => {
      const index = pokemons.value.findIndex(element => element.name === item.name);
      pokemon.value.favorite = !pokemon.value.favorite
      updateItem(index);

    };

    const updateItem = (index: number) => {
      pokemons.value[index].favorite = !pokemons.value[index].favorite;
      if (pokemons.value[index].favorite) {
        store.commit(types.ADD_FAVORITE_POKEMON, pokemons.value[index]);
      } else {
        store.commit(types.DELETE_FAVORITE_POKEMON, pokemons.value[index]);
      }
      getFavList();
    };

    const isFavorite = (pokemon_name: string) => {
      return favList.value.filter(val => val.name === pokemon_name).length != 0;
    };

    const getPokemons = async () => {
      await pokemonApi.get("/api/v2/pokemon?limit=151&offset=0").then(
        (response) => {
          pokemons.value = response.data.results.map((value: any) => {
            let fav_value = isFavorite(value.name);
            return new Pokemon(value.name, value.url, fav_value);
          });
        }
      );
    };


    const getFavList = () => {
      favList.value = store.getters.getFavoritesList;
    };

    const getPokemon = async (query: string) => {
      await pokemonApi.get(`/api/v2/pokemon/${query}`).then((response) => {
        let fav_value = isFavorite(response.data.name);
        pokemon.value = {
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types,
          image: response.data.sprites.other["official-artwork"].front_default,
          favorite: fav_value
        };
        console.log(pokemon.value);
      }).catch((error) => {
        console.log(error.response);
      });
    };

    const getPokemonByUrl = async (url: string) => {
      await pokemonApi.get(url).then((response) => {
        let fav_value = isFavorite(response.data.name);
        pokemon.value = {
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types,
          image: response.data.sprites.other["official-artwork"].front_default,
          favorite: fav_value
        };
        console.log(pokemon.value);
      }).catch((error) => {
        console.log(error.response);
      });
    };

    const openModal = (url: string) => {
      getPokemonByUrl(url).then(() => {
          flagModal.value = true;

        }
      );

    };

    onMounted(() => {
      getFavList();
      getPokemons();
    });

    return {
      flagModal,
      pokemons,
      pokemon,
      updateItemByIndex,
      getPokemonByUrl,
      openModal,
      updateItemByObject,
    };

  }
});
</script>

<style lang="sass">
.input
  border: none!important
  padding: 0!important
  font-family: "Lato"

  height: 22px



.input:focus
  outline: none
</style>