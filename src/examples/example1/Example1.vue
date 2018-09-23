<template>
  <div class="example-1">
  	<div class="item" v-for="i in 30"><span>{{i}}</span></div>
  </div>
</template>

<script>
import './example1.scss';

export default {
  name: 'Example1',
}
</script>