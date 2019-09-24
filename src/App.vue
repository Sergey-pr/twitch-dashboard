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
  color: #fff;
  background-color: #222
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #b9a3e3;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}

body {
  background-color: #222
}

.card {
  margin: 5px;
}

.btn-primary {
  background-color: #6441a5;
  border-color: #b9a3e3;
   &:hover {
     background-color: #483a61;
     border-color: #6f6581;
   }
}

</style>
