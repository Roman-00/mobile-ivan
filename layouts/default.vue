<template>
	<div id="app">
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
	components: {
		Header,
		Footer,
	}
}
</script>
<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
}
</style>
