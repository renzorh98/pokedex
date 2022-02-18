<template>
  <router-view />
</template>

<style lang="scss">
html {
  background: #f9f9f9;
  overflow-y: scroll;
}

body {
  background: #f9f9f9;
  margin: 0;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
