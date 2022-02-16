import { defineComponent } from "vue";
import { Pokemon } from "@/models/pokemon";

export default defineComponent({
  props: {
    list: {
      type: Array(Pokemon),
      default: () => [],
    },
  },
  emits: ["updateItem"],
  setup(props, { emit }) {

    const updateItem = (item: Pokemon) => {
     emit('updateItem',item)
    };


    const setFavorite = (id: number) => {
      //do something whit id
    };

    const seeDetails = (pokemon: Pokemon) => {
      //do something whit id

    };

    return {
      setFavorite,
      seeDetails,
      updateItem,
    };
  },
});
