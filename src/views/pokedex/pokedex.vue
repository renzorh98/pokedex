<!--eslint-disable-->
<template>
  <div>
    <div class="view-wrap w-nav-bar">
      <div class="content-wrap">
        <v-control :icon="'icon_search.svg'">
          <input class="input-control" type="text" placeholder="Search" v-model="filter">
        </v-control>
        <template v-if="view === 'all'">
          <v-list :list="filterList" v-on:updateItem="updateItemByIndex" v-on:setItem="openModal"></v-list>
        </template>
        <template v-if="view === 'favorite'">
          <v-list :list="filterList" v-on:updateItem="updateItemByIndex" v-on:setItem="openModal"></v-list>
        </template>
      </div>
    </div>
  </div>
  <div class="bottom-nav">
    <div class="button-container">
      <v-button size="big" :state="view==='all'?'active':'disabled'" v-on:click="setListContent('all')">
        <img alt="icono all" src="@/assets/icons/icon_all.svg" />&nbsp;&nbsp;All
      </v-button>
      <v-button size="big" :state="view==='favorite'?'active':'disabled'" v-on:click="setListContent('favorite')">
        <img alt="icono favoritos" src="@/assets/icons/icon_fav.svg" />&nbsp;&nbsp;Favorites
      </v-button>
    </div>
  </div>
  <pokemon-modal :showModal="flagModal" :pokemon="pokemon" v-on:close="flagModal = false"
                 v-on:setFavorite="updateItemByObject"></pokemon-modal>
  <loading :show="flagLoading"></loading>

</template>
<!--eslint-disable-->
<script lang="ts" src="./pokedex.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./pokedex.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../../src/styles/general.sass" />
