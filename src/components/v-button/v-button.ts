import { computed, defineComponent, PropType } from "vue";

type ButtonSize = undefined | "big";
type StateType = "normal" | "active" | "disabled";
export default defineComponent({
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: undefined,
      validator: (value: ButtonSize) => {
        if ([undefined, "normal", "big"].indexOf(value) === -1) {
          console.warn(
            `v-button: Invalid '${value}' size. Should be normal, big, or undefined`
          );
          return false;
        }
        return true;
      },
    },
    state: {
      type: String as PropType<StateType>,
      default: "default",
      validator: (value: StateType) => {
        if (["default", "active", "disabled"].indexOf(value) === -1) {
          console.warn(
            `v-button: Invalid '${value}' state. Should be default, active or disabled`
          );
          return false;
        }
        return true;
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      return [
        props.size && `is-${props.size}`,
        props.state && `is-${props.state}`,
      ];
    });

    return {
      classes,
    };
  },
});
