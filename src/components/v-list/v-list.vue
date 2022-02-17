<template>
  <div class="list-container" style="overflow-y: auto;">
    <template v-if="list.length === 0">
      <div>
        <div class="message-container">
          <p class="title">Uh-oh!</p>
          <p class="description">You look lost on your journey!</p>
        </div>

        <v-button size="normal">Go back home</v-button>

      </div>


    </template>
    <template v-else>
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
    </template>

  </div>
</template>

<script lang="ts" src="./v-list.ts" />

<style scoped lang="sass" src="./v-list.sass" />
<style scoped lang="sass" src="@/styles/general.sass" />