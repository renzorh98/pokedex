import { defineComponent } from "vue";
import { Pokemon } from "@/models/pokemon";

export default defineComponent({
  props: {
    list: {
      type: Array(Pokemon),
      default: () => [],
    },
  },
  emits: ["updateItem", "setItem"],
  setup(props, { emit }) {
    const setFavorite = (index: number) => {
      emit("updateItem", index);
    };

    const seeDetails = (url: string) => {
      emit("setItem", url);
    };

    return {
      setFavorite,
      seeDetails,
    };
  },
});
