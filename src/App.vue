<template>
  <router-view />
</template>

<style lang="scss">
html{
  background: #F9F9F9;
  overflow-y: scroll;
}
body{
  background: #F9F9F9;
  margin: 0px;
}
#app {
  font-family: "Lato";
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
