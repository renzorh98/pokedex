import { defineComponent } from "vue";
import { IPokemon } from "@/models/pokemon";

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["event-details"],
  setup(props, { emit }) {
    const setFavorite = (id: number) => {
      //do something whit id
    };

    const seeDetails = (pokemon: IPokemon) => {
      emit("event-details", pokemon);
    };

    return {
      setFavorite,
      seeDetails,
    };
  },
});
