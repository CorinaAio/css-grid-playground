<template>
  <div class="banner">
  	<img class="banner-image" :src="image">
  	<h1 class="banner-title">{{title}}</h1>
  	<p class="banner-description">{{description}}</p>
  	<div class="banner-slot">
	  	<slot name="buttons"></slot>
	</div>
  </div>
</template>

<script>
import './banner.scss';

export default {
  name: 'Banner',
	props: {
	  title: String,
	  description: String,
	  image: String,
	}
}
</script>

