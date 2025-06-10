<template>
	<v-app>
	<NavBar />
		<v-main>
			<slot />
		</v-main>
	<FooterBar />
	</v-app>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'
export default {
	name: 'DefaultLayout',
	components: {
		NavBar,
		FooterBar
	}
}
</script>

