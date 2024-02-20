<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="flex h-[100dvh] w-full items-start pt-[5rem]">
	<aside class="h-full w-[15rem] flex-shrink-0 py-4 pl-1">
		<button class="button hover:bg-primary-50 w-full justify-start"> iphone 11 </button>
	</aside>
	<section class="bg-primary-50 h-full flex-grow">
		<slot />
	</section>
</main>
