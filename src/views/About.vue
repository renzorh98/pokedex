<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="../assets/illustrations/welcome/pikachu.svg" />
    <img src="../assets/illustrations/loading/loader.svg" />
    <img src="../assets/icons/fav_active.svg" />
    <img src="../assets/icons/fav_disabled.svg" />
    <v-button>Get started</v-button>
    <v-button>Go back home </v-button>
    <v-button size="big" ><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All </v-button>
    <v-button size="big" :state="'disabled'"><img src="../assets/icons/icon_all.svg" />&nbsp;&nbsp;All </v-button>
    <v-button size="big" :state="'active'"><img src="../assets/icons/icon_fav.svg" />&nbsp;&nbsp;All </v-button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import VButton from "@/components/v-button/v-button.vue";
export default defineComponent({
  components: {
    VButton,
  },
});
</script>
