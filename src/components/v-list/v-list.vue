<!--eslint-disable-->
<template>
  <div class="list-container" style="overflow-y: auto;">
    <template v-if="list.length === 0">
      <div class="advertise-container">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <div data-test="list-item" class="list-item" v-for="item in list" :key="item.name" v-on:click="seeDetails(item.url)">
        <div class="item-desc">
          <span data-test="name" class="name-text">{{ item.name }}</span>
        </div>
        <div class="item-button">
          <Transition name="slide-up" mode="out-in">
            <img
              data-test="favorite"
              v-if="item.favorite"
              alt="favorite icon"
              class="is-button"
              :src="require('../../assets/icons/fav_active.svg')"
              v-on:click.stop="setFavorite(item.name)"
            />
            <img
              data-test="no-favorite"
              v-else-if="!item.favorite"
              alt="favorite icon"
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
<style scoped lang="sass" src="../../styles/transition-effects.sass" />