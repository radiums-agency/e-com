<script lang="ts">
	import type { PageData } from './$types';
	import ProductCard from '$lib/components/ProductCard.svelte'

	// export let data: PageData;
</script>

<div class=" card-c px-[10vw] w-full">
	{#each Array(8) as item}
		<ProductCard/>
	{/each}
</div>


<style>
	.card-c {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 20px;
	}
</style>
