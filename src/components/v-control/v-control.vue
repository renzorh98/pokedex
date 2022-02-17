<template>
  <div class="control">
    <div class="content-wrap">
      <div class="icon-wrap" v-if="icon">
        <img :src="require('@/assets/icons/'+icon)" />
      </div>
      <slot></slot>
    </div>

  </div>
</template>

<script lang="ts" src="./v-control.ts" />

<style scoped lang="sass" src="./v-control.sass" />