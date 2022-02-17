import { defineComponent } from "vue";
import VButton from "@/components/v-button/v-button.vue";

export default defineComponent({
  components: {
    VButton,
  },
  setup() {
    const title = "Welcome to Pokédex";
    const description =
      "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.";
    return {
      title,
      description,
    };
  },
});
