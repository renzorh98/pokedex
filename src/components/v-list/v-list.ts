import { defineComponent } from "vue";
import VButton from "@/components/v-button/v-button.vue";

export default defineComponent({
  components: {
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
    const setFavorite = (name: string) => {
      emit("updateItem", name);
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
