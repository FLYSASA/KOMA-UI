<template>
	<svg class="g-icon">
		<use :xlink:href="`#i-${name}`" />
	</svg>
</template>

<script>
	import './svg';
	export default {
		name:'KomaIcon',
		props: {
			name: {
				type: String
			}
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