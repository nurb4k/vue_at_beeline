<template>
  <nav-bar>

  </nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "@/views/Nav-bar";

export default {
  name: 'App',
  components: {
    NavBar,

  }
}
</script>

<style>
* {
  margin: 0;

  box-sizing: border-box;
}
</style>
