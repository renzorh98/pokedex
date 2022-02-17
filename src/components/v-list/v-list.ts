import { defineComponent } from "vue";
import { Pokemon } from "@/models/pokemon";
import VButton from "@/components/v-button/v-button.vue";

export default defineComponent({
  components:{
    VButton,
  },
  props: {
    list: {
      type: Array,
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
