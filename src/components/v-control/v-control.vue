<!--eslint-disable-->
<template>
  <div class="control">
    <div class="content-wrap">
      <div class="icon-wrap" v-if="icon">
        <img alt="icon" :src="require('@/assets/icons/'+icon)" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<!--eslint-disable-->
<script lang="ts" src="./v-control.ts" />
<!--eslint-disable-->
<style scoped lang="sass" src="./v-control.sass" />