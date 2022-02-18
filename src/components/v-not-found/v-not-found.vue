<!--eslint-disable-->
<template>
  <div class="advertise-container">
    <div class="message-container">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <v-button size="normal" v-on:click="$router.push('/')">Go back home</v-button>
  </div>
</template>
<!--eslint-disable-->
<script lang="ts" src="./v-not-found.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./v-not-found.sass" />
<!--eslint-disable-->
<style scoped lang="sass" src="../../styles/general.sass" />