<!--eslint-disable-->
<template>
  <div class="view-wrap">
    <div class="content-wrap">
      <div class="image-wrap">
        <img alt="imagen pikachu" src="@/assets/illustrations/welcome/pikachu.svg" />
      </div>
      <div class="welcome-text-wrap">
        <p class="header-welcome">{{ title }}</p>
        <p class="description-welcome">{{ description }}</p>
      </div>
      <v-button>Get started</v-button>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script lang="ts" src="./welcome.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./welcome.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="@/styles/general.sass" />