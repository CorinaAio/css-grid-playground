<template>
  <div id="app">
    <v-banner v-bind="bannerData">
    	<p>buttons</p>
    </v-banner>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import './app.scss';

export default {
  name: 'app',
  components: {
    'v-banner': Banner
  },
  data: () => {
  	return {
	  	bannerData: {
	  		title: 'Hamsters secret club',
	  		image: 'https://images.vexels.com/media/users/3/145052/isolated/preview/8043bda93b5a8c57ee969a43dd36fb76-mouse-illustration-by-vexels.png',
	  		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  		}
	}
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
