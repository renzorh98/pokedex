<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/illustrations/welcome/pikachu.svg" />
    <img src="../assets/illustrations/loading/loader.svg" />
    <img src="../assets/icons/fav_active.svg" />
    <img src="../assets/icons/fav_disabled.svg" />
    <v-button>Get started</v-button>
    <v-button>Go back home</v-button>
    <v-button size="big"><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All</v-button>
    <v-button size="big" :state="'disabled'"><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All</v-button>
    <v-button size="big" :state="'active'"><img src="../assets/icons/icon_fav.svg" />&nbsp;&nbsp;All</v-button>
    <v-list :list="pokemons" v-on:updateItem="updateItem"></v-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import VButton from "@/components/v-button/v-button.vue";
import VList from "@/components/v-list/v-list.vue";
import * as pokemonApi from "@/services/pokemonApi";
import { Pokemon } from "@/models/pokemon";
import { useStore } from "vuex";
import * as types from "@/store/types"


export default defineComponent({
  components: {
    VButton,
    VList
  },
  setup() {
    const store = useStore()

    const pokemons = ref(Array(Pokemon))

    const favList = ref(Array(Pokemon))

    const pokemon = ref({  })

    const updateItem = (item: Pokemon) => {
      store.commit(types.ADD_FAVORITE_POKEMON,item)
    }

    const getPokemons = async () => {
      await pokemonApi.get("/api/v2/pokemon").then(
        (response) => {
          pokemons.value = response.data.results.map((value: any) => {
            let isFavorite = favList.value.filter(val => val.name === value.name).length != 0
            return new Pokemon(value.name, value.url, isFavorite)
          })
        }
      );
    };

    const getFavList = () => {
      favList.value=store.getters.getFavoritesList
    }

    const getPokemon = async () => {
      await pokemonApi.get("/api/v2/pokemon/raichu").then((response) => {
        // pokemon.value = new Pokemon(response)
        console.log(response);

      }).catch((error) => {
        console.log(error.response);
      });
    };

    onMounted( () => {
      getFavList()
      getPokemons()    })

    return{
      pokemons,
      updateItem,
    }

  }
});
</script>
