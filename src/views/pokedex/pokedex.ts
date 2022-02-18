import { defineComponent, onMounted, ref, watch } from "vue";
import VList from "@/components/v-list/v-list.vue";
import VControl from "@/components/v-control/v-control.vue";
import VButton from "@/components/v-button/v-button.vue";
import PokemonModal from "@/components/pokemon-modal/pokemon-modal.vue";
import { useStore } from "vuex";
import { Pokemon } from "@/models/pokemon";
import * as types from "@/store/types";
import * as pokemonApi from "@/services/pokemonApi";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default defineComponent({
  components: {
    VList,
    VControl,
    PokemonModal,
    VButton,
  },
  setup() {
    const flagModal = ref(false);
    const view = ref("all");
    const filter = ref("");
    const filterList = ref();
    const favList = ref(Array<Pokemon>());
    const pokemons = ref(Array<Pokemon>());
    const pokemon = ref({
      name: "",
      weight: 0,
      height: 0,
      image: "",
      types: [],
      favorite: false,
    });
    const store = useStore();

    const updateItemByIndex = (index: number) => {
      const pokemons_index = pokemons.value.findIndex(
        (element) => element.name === filterList.value[index].name
      );

      updateItem(pokemons_index);
    };

    const updateItemByObject = (item: any) => {
      const index = pokemons.value.findIndex(
        (element: Pokemon) => element.name === item.name
      );
      pokemon.value.favorite = !pokemon.value.favorite;
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

    const getFavList = () => {
      favList.value = store.getters.getFavoritesList;
    };

    const isFavorite = (favList: Array<any>, pokemon_name: string) => {
      return favList.filter((val) => val.name === pokemon_name).length != 0;
    };

    const getPokemons = async () => {
      await pokemonApi
        .get("/api/v2/pokemon?limit=151&offset=0")
        .then((response) => {
          pokemons.value = response.data.results.map((value: any) => {
            const fav_value = isFavorite(favList.value, value.name);
            return new Pokemon(value.name, value.url, fav_value);
          });
          filterList.value = pokemons.value;
        });
    };

    const getPokemonByUrl = async (url: string) => {
      await pokemonApi
        .get(url)
        .then((response) => {
          const fav_value = isFavorite(favList.value, response.data.name);
          pokemon.value = {
            name: response.data.name,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types,
            image:
              response.data.sprites.other["official-artwork"].front_default,
            favorite: fav_value,
          };
          console.log(pokemon.value);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

    const openModal = (url: string) => {
      getPokemonByUrl(url).then(() => {
        flagModal.value = true;
      });
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
      filter,
      filterList,
      view,
      favList,

      updateItemByIndex,
      openModal,
      updateItemByObject,
      setListContent,
    };
  },
});
