<!--eslint-disable-->
<template>
  <div class="list-container" style="overflow-y: auto;">
    <template v-if="list.length === 0">
      <div :style="'height: 400px'">
        <div class="message-container">
          <p class="title">Uh-oh!</p>
          <p class="description">You look lost on your journey!</p>
        </div>
        <v-button size="normal" v-on:click="$router.push('welcome')">Go back home</v-button>
      </div>
    </template>
    <template v-else>
      <div class="list-item" v-for="item in list" :key="item.name" v-on:click="seeDetails(item.url)">
        <div class="item-desc">
          <span class="name-text">{{ item.name }}</span>
        </div>
        <div class="item-button">
          <Transition name="slide-up" mode="out-in">
            <img
              v-if="item.favorite"
              alt="boton favorito"
              class="is-button"
              :src="require('../../assets/icons/fav_active.svg')"
              v-on:click.stop="setFavorite(item.name)"
            />
            <img
              v-else-if="!item.favorite"
              alt="boton favorito"
              class="is-button"
              :src="require('../../assets/icons/fav_disabled.svg')"
              v-on:click.stop="setFavorite(item.name)"
            />
          </Transition>

        </div>
      </div>
    </template>

  </div>
</template>
<!--eslint-disable-->
<script lang="ts" src="./v-list.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./v-list.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../styles/general.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../styles/transition-efects.sass" />