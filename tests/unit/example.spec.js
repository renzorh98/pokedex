import { mount, shallowMount } from "@vue/test-utils";
import Loading from "@/components/loading/loading.vue";
import PokemonModal from "@/components/pokemon-modal/pokemon-modal.vue";
import VList from "@/components/v-list/v-list.vue";
import VButton from "@/components/v-button/v-button.vue";

const defaultProps = {
  pokemon: {
    name: "squirtle",
    weight: 90,
    height: 5,
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    favorite: true,
  },

  pokemons: [
    {
      name: "test0",
      url: "test0",
      favorite: true,
    },
    {
      name: "test1",
      url: "test1",
      favorite: false,
    },
  ],

  vbutton: [
    {
      size: "normal",
      type: "default",
    },
    {
      size: "big",
      type: "disabled",
    },
    {
      size: "big",
      type: "active",
    },
    {
      type: "disabled",
    },
  ],
};
describe("Loading", () => {
  test("loading rendered", () => {
    const wrapper = shallowMount(Loading, {
      propsData: {
        show: true,
      },
    });
    expect(wrapper.isVisible()).toBe(true);
  });
});

describe("Pokemon modal", () => {
  test("Pokemon modal rendered", () => {
    const wrapper = mount(PokemonModal, {
      propsData: {
        showModal: true,
        pokemon: defaultProps.pokemon,
      },
    });
    expect(wrapper.isVisible()).toBe(true);
  });

  test("Pokemon modal should render given information", () => {
    const wrapper = mount(PokemonModal, {
      propsData: {
        showModal: true,
        pokemon: defaultProps.pokemon,
      },
    });
    expect(wrapper.get('[data-test="name"]').text()).toBe("squirtle");
    expect(wrapper.get('[data-test="image"]').attributes().src).toBe(
      defaultProps.pokemon.image
    );
    expect(wrapper.get('[data-test="weight"]').text()).toBe("9");
    expect(wrapper.get('[data-test="height"]').text()).toBe("0.5");
    expect(wrapper.get('[data-test="types"]').text()).toBe("water");
    expect(wrapper.find('[data-test="favorite"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="no-favorite"]').exists()).toBe(false);
  });

  test("Pokemon modal should render favorite icon if it isn't a favorite pokemon", () => {
    const wrapper = mount(PokemonModal, {
      propsData: {
        showModal: true,
        pokemon: { ...defaultProps.pokemon, favorite: false },
      },
    });
    expect(wrapper.find('[data-test="favorite"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="no-favorite"]').exists()).toBe(true);
  });

  test("Pokemon modal should emit setFavorite event whit pokemon's object as param when favorite button is clicked", () => {
    const wrapper = mount(PokemonModal, {
      propsData: {
        showModal: true,
        pokemon: defaultProps.pokemon,
      },
    });

    const favoriteButton = wrapper.get('[data-test="favorite"]');
    favoriteButton.trigger("click");
    expect(wrapper.emitted("setFavorite")[0][0]).toStrictEqual(
      defaultProps.pokemon
    );
  });

  test("Pokemon modal should emit close event when close button is clicked", () => {
    const wrapper = mount(PokemonModal, {
      propsData: {
        showModal: true,
        pokemon: defaultProps.pokemon,
      },
    });

    const favoriteButton = wrapper.get('[data-test="close"]');
    favoriteButton.trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});

describe("VList", () => {
  test("VList should render all the elements received by prop", () => {
    const wrapper = mount(VList, {
      propsData: {
        list: defaultProps.pokemons,
      },
    });

    const elements = wrapper.findAll('[data-test="name"]');
    expect(elements.length).toBe(defaultProps.pokemons.length);
  });
  test("VList should emit updateItem event whit pokemon's name as param when favorite or no favorite icon is clicked", () => {
    const wrapper = mount(VList, {
      propsData: {
        list: defaultProps.pokemons,
      },
    });

    const fav = wrapper.get('[data-test="favorite"]');
    fav.trigger("click");
    expect(wrapper.emitted("updateItem")[0][0]).toStrictEqual(
      defaultProps.pokemons[0].name
    );
  });
  test("VList should emit setItem event whit pokemon's url as param when an list item is clicked", () => {
    const wrapper = mount(VList, {
      propsData: {
        list: defaultProps.pokemons,
      },
    });

    const elements = wrapper.findAll('[data-test="list-item"]');
    elements[0].trigger("click");
    expect(wrapper.emitted("setItem")[0][0]).toStrictEqual(
      defaultProps.pokemons[0].url
    );
  });
});

describe("VButton", () => {
  test("VButton classes should contain is-normal and is-default", () => {
    const wrapper = mount(VButton, {
      propsData: {
        size: defaultProps.vbutton[0].size,
        state: defaultProps.vbutton[0].type,
      },
    });

    expect(wrapper.get('[test-data="button"]').classes()).toContain(
      "is-normal"
    );
    expect(wrapper.get('[test-data="button"]').classes()).toContain(
      "is-default"
    );
  });
  test("VButton classes should contain is-big and is-disabled", () => {
    const wrapper = mount(VButton, {
      propsData: {
        size: defaultProps.vbutton[1].size,
        state: defaultProps.vbutton[1].type,
      },
    });

    expect(wrapper.get('[test-data="button"]').classes()).toContain("is-big");
    expect(wrapper.get('[test-data="button"]').classes()).toContain(
      "is-disabled"
    );
  });
  test("VButton classes should contain is-big and is-active", () => {
    const wrapper = mount(VButton, {
      propsData: {
        size: defaultProps.vbutton[2].size,
        state: defaultProps.vbutton[2].type,
      },
    });

    expect(wrapper.get('[test-data="button"]').classes()).toContain("is-big");
    expect(wrapper.get('[test-data="button"]').classes()).toContain(
      "is-active"
    );
  });
  test("VButton classes should contain is-disabled", () => {
    const wrapper = mount(VButton, {
      propsData: {
        state: defaultProps.vbutton[3].type,
      },
    });

    expect(wrapper.get('[test-data="button"]').classes()).toContain(
      "is-disabled"
    );
  });
});
