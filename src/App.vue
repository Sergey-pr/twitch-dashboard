<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Games</router-link> |
      <router-link to="/top-streams">Top streams</router-link>
    </div>
    <b-container fluid>
    <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e0046;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #3e0046;
    &.router-link-exact-active {
      color: #a542b9;
    }
  }
}
</style>
