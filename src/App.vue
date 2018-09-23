<template>
  <div id="app">
	  <Example1 />
  </div>
</template>

<script>
import Example1 from './examples/Example1.vue'
import './app.scss';

export default {
  name: 'app',
  components: {
  	Example1
  }
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
