<!--eslint-disable-->
<template>
  <v-modal v-show="showModal">
    <template v-slot:header>
      <div class="pokemon-header">
        <img
          data-test="close"
          alt="close icon"
          class="modal-close is-button"
          :src="require('../../assets/icons/close-modal.svg')"
          v-on:click="emitClose"
        />
        <div style="width: calc(100% - 82px); padding-left: 41px">
          <img data-test="image" alt="pokemon image" class="pokemon-image" :src="pokemon.image" />
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="pokemon-body">
        <div class="pokemon-detail">
          <span class="label">Name:</span>&nbsp;&nbsp;<span data-test="name" class="pokemon-text">{{ pokemon.name }}</span>
        </div>
        <hr class="separator" />
        <div class="pokemon-detail">
          <span class="label">Weight:</span>&nbsp;&nbsp;<span data-test="weight" class="pokemon-text">{{ pokemon.weight / 10 }}</span>
        </div>
        <hr class="separator" />
        <div class="pokemon-detail">
          <span class="label">Height:</span>&nbsp;&nbsp;<span data-test="height"  class="pokemon-text">{{ pokemon.height / 10 }}</span>
        </div>
        <hr class="separator" />
        <div class="pokemon-detail">
          <span class="label">Types:</span>&nbsp;&nbsp;<span data-test="types" class="pokemon-text">{{ getTypes }}</span>
        </div>
        <hr class="separator" />
      </div>
    </template>
    <template v-slot:footer>
      <div class="pokemon-footer">
        <v-button class="on-left" v-on:click="copyToClipboard">Share to my friends</v-button>
        <Transition name="slide-up" mode="out-in">
          <img
            data-test="favorite"
            v-if="pokemon.favorite"
            alt="favorite icon"
            class="on-right is-button"
            :src="
            require('../../assets/icons/fav_active.svg')
          "
            v-on:click="setFavorite(pokemon)" />
          <img
            data-test="no-favorite"
            v-else-if="!pokemon.favorite"
            alt="favorite icon"
            class="on-right is-button"
            :src="
            require('../../assets/icons/fav_disabled.svg')
          "
            v-on:click="setFavorite(pokemon)" />
        </Transition>
      </div>
    </template>
  </v-modal>

</template>
<!--eslint-disable-->
<script lang="ts" src="./pokemon-modal.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./pokemon-modal.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../styles/general.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../styles/transition-effects.sass" />