<template>
  <div class="banner">
	<h1 class="banner-title">{{title}}</h1>
  	<img class="banner-image" :src="image">
  	<div class="banner-advertisment">
  		<img src="https://cdn.shopify.com/s/files/1/1180/8306/files/heart_27fd4fd2-ac5d-4397-9a7a-806fd70b2b7b_2048x.png?v=1520459686" >
  		<span class="advertisment-text">30% off for sunflower seeds!</span>
  	</div>
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

