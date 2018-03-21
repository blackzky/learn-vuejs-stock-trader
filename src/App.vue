<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/common/Header';

let components = {};
components[Header.tag] = Header;

export default {
  name: 'App',
  components: components
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
