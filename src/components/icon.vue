<template>
	<svg class="k-icon" @click="$emit('click', $event)">
		<use :xlink:href="`#i-${name}`" />
	</svg>
</template>

<script>
	import '../svg';
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
	.k-icon {
		width: 1em;
		height: 1em;
	}
</style>