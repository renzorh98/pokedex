<template>
  <div class="list-container">
    <div class="list-item" v-for="(item, k) in list" :key="k" v-on:click="seeDetails(item.url)">
      <div class="item-desc">
        <span class="name-text">{{ item.name }}</span>
      </div>
      <div class="item-button">
        <img
          class="is-button"
          :src="item.favorite?require('../../assets/icons/fav_active.svg'):require('../../assets/icons/fav_disabled.svg')"
          v-on:click.stop="setFavorite(k)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./v-list.ts" />

<style scoped lang="sass" src="./v-list.sass" />