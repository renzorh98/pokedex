<template>
  <div>
    <div class="view-wrap w-nav-bar">
      <div class="content-wrap">
        <v-control :icon="'icon_search.svg'">
          <input class="input-control" type="text" placeholder="Search" v-model="filter">
        </v-control>

        <template v-if="!view">
          <v-list :list="filterList" v-on:updateItem="updateItemByIndex" v-on:setItem="openModal"></v-list>
        </template>
        <template v-if="view">
          <v-list :list="filterList" v-on:updateItem="updateItemByIndex" v-on:setItem="openModal"></v-list>
        </template>
      </div>
    </div>
  </div>
  <div class="bottom-nav">
    <div class="button-container">
      <v-button size="big" :state="!view?'active':'disabled'" v-on:click="setListContent(0)">
        <img src="@/assets/icons/icon_all.svg" />&nbsp;&nbsp;All
      </v-button>
      <v-button size="big" :state="!view?'disabled':'active'" v-on:click="setListContent(1)">
        <img src="@/assets/icons/icon_fav.svg" />&nbsp;&nbsp;Favorites
      </v-button>
    </div>
  </div>
  <pokemon-modal :showModal="flagModal" :pokemon="pokemon" v-on:close="flagModal = false"
                 v-on:setFavorite="updateItemByObject"></pokemon-modal>

</template>

<script lang="ts" src="./pokedex.ts" />
<style scoped lang="sass" src="./pokedex.sass" />
<style scoped lang="sass" src="@/styles/general.sass" />
