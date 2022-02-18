import { defineComponent, onMounted, ref, watch } from "vue";
import VList from "@/components/v-list/v-list.vue";
import VControl from "@/components/v-control/v-control.vue";
import VButton from "@/components/v-button/v-button.vue";
import VNotFound from "@/components/v-not-found/v-not-found.vue";
import PokemonModal from "@/components/pokemon-modal/pokemon-modal.vue";
import Loading from "@/components/loading/loading.vue";
import { useStore } from "vuex";
import { Pokemon } from "@/models/pokemon";
import * as types from "@/store/types";
import * as pokemonApi from "@/services/pokemonApi";

const POKEMON_BASE = {
  name: "",
  weight: 0,
  height: 0,
  image: "",
  types: [],
  favorite: false,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineComponent({
  components: {
    VList,
    VControl,
    VButton,
    VNotFound,
    PokemonModal,
    Loading,
  },
  setup() {
    const store = useStore();
    const flagModal = ref(false);
    const flagLoading = ref(false);
    //view -> 'all' | 'favorite'
    const view = ref("all");
    const filter = ref("");
    const filterList = ref();
    const favList = ref(Array<Pokemon>());
    const pokemons = ref(Array<Pokemon>());
    const pokemon = ref(POKEMON_BASE);

    const getFavList = () => {
      favList.value = store.getters.getFavoritesList;
    };

    const isFavorite = (favList: Array<any>, pokemon_name: string) => {
      return favList.filter((val) => val.name === pokemon_name).length != 0;
    };

    const openModal = (url: string) => {
      getPokemonByUrl(url).then(() => {
        flagModal.value = true;
      });
    };

    const closeModal = () => {
      pokemon.value = POKEMON_BASE;
      flagModal.value = false;
    };

    const setListContent = (type: string) => {
      if (view.value !== type) {
        view.value = type;
        if (type === "all") {
          filterList.value = pokemons.value;
        } else if (type === "favorite") {
          filterList.value = favList.value;
        }
        filter.value = "";
      }
    };

    const updateItemByName = (name: string) => {
      const pokemons_index = pokemons.value.findIndex(
        (element) => element.name === name
      );
      updateItemFavoriteList(pokemons_index);
    };

    const updateItemByObject = (item: any) => {
      const index = pokemons.value.findIndex(
        (element: Pokemon) => element.name === item.name
      );
      pokemon.value.favorite = !pokemon.value.favorite;
      updateItemFavoriteList(index);
    };

    const updateItemFavoriteList = (index: number) => {
      pokemons.value[index].favorite = !pokemons.value[index].favorite;
      if (pokemons.value[index].favorite) {
        store.commit(types.ADD_FAVORITE_POKEMON, pokemons.value[index]);
      } else {
        store.commit(types.DELETE_FAVORITE_POKEMON, pokemons.value[index]);
      }
      getFavList();
    };

    const getPokemons = async () => {
      flagLoading.value = true;
      setTimeout(async () => {
        await pokemonApi
          .get("/api/v2/pokemon?limit=151&offset=0")
          .then((response) => {
            pokemons.value = response.data.results.map((value: any) => {
              const fav_value = isFavorite(favList.value, value.name);
              return new Pokemon(value.name, value.url, fav_value);
            });
            filterList.value = pokemons.value;
            flagLoading.value = false;
          });
      }, 3000);
    };

    const getPokemonByUrl = async (url: string) => {
      await pokemonApi.get(url).then((response) => {
        const fav_value = isFavorite(favList.value, response.data.name);
        pokemon.value = {
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types,
          image: response.data.sprites.other["official-artwork"].front_default,
          favorite: fav_value,
        };
      });
    };

    watch(filter, (val) => {
      if (val === "") {
        if (view.value === "all") {
          filterList.value = pokemons.value;
        } else if (view.value === "favorite") {
          filterList.value = favList.value;
        }
      } else {
        if (view.value === "all") {
          filterList.value = pokemons.value.filter((element) =>
            element.name.includes(val.toLowerCase())
          );
        } else if (view.value === "favorite") {
          filterList.value = favList.value.filter((element) =>
            element.name.includes(val.toLowerCase())
          );
        }
      }
    });

    onMounted(async () => {
      getFavList();
      await getPokemons();
    });

    return {
      pokemons,
      pokemon,
      flagModal,
      flagLoading,
      filter,
      filterList,
      view,
      favList,

      updateItemByName,
      openModal,
      closeModal,
      updateItemByObject,
      setListContent,
    };
  },
});
