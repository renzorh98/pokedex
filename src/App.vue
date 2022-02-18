<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style lang="scss">
html {
  background: #f9f9f9;
}

body {
  background: #f9f9f9;
  margin: 0;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  position: fixed;

  background: none;
}

body::-webkit-scrollbar-thumb {
  position: fixed;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
</style>
