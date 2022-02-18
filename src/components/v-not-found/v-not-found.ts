import { defineComponent } from "vue";
import VButton from "@/components/v-button/v-button.vue";

export default defineComponent({
  components: {
    VButton,
  },
  setup() {
    const title = "Uh-oh!";
    const description = "You look lost on your journey!";

    return {
      title,
      description,
    };
  },
});
