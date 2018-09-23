<template>
    <v-banner v-bind="bannerData">
    	<div class="button-group" slot="buttons">
	    	<button>Click for seeds</button>
	    	<button class="secondary">Go back to cage</button>
    	</div>
    </v-banner>
</template>

<script>
import Banner from '../../components/Banner.vue';

export default {
  name: 'Example2',
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
