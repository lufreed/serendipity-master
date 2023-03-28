<template>
  <!-- <router-view></router-view> -->
  <Login></Login>
</template>

<script>
import Login from "./views/Login.vue";
export default {
		name: 'App',
		components: {
			Login
	  },
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
