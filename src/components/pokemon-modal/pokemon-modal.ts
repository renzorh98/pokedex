import { computed, defineComponent } from "vue";
import VModal from "@/components/v-modal/v-modal.vue";
import VButton from "@/components/v-button/v-button.vue";

export default defineComponent({
  components: {
    VModal,
    VButton,
  },
  props: {
    showModal: {
      type: Boolean,
    },
    pokemon: {
      type: Object,
      required: true,
    },
  },
  emits: ["close", "setFavorite"],

  setup(props, { emit }) {
    const emitClose = () => {
      emit("close");
    };
    const getTypes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (props.pokemon.types.length) {
        const arrayTypes = props.pokemon.types.map((value: any) => {
          return value.type.name;
        });
        return arrayTypes.toString().replace(",", ", ");
      }
      return "";
    });

    const setFavorite = (pokemon: any) => {
      emit("setFavorite", pokemon)
    }

    return {
      emitClose,
      getTypes,
      setFavorite,
    };
  },
});
