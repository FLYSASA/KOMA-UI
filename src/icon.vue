<template>
	<svg class="g-icon">
		<use :xlink:href="`#i-${name}`" />
	</svg>
</template>

<script>
	export default {
		props: {
			name: {}
		},
		data() {
			return {};
		}
	};
</script>
<style lang='less' scoped>
	.g-icon {
		width: 1em;
		height: 1em;
	}
</style>