<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div>
          <slot name="header"></slot>
        </div>
        <div>
          <slot name="body"></slot>
        </div>
        <div>
          <slot name="footer"></slot>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="sass" src="./v-modal.sass" />