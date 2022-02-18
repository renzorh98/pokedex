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
  emits: ["setFavorite", "setItem"],
  setup(props, { emit }) {
    const setFavorite = (name: string) => {
      emit("setFavorite", name);
    };

    const setItem = (url: string) => {
      emit("setItem", url);
    };

    return {
      setFavorite,
      setItem,
    };
  },
});
