<script lang="ts">
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<header class="text-primary-950 fixed top-0 w-full bg-white px-[5vw] py-4">
	<a href="/fr-fr"> Gris Market </a>
</header>

<main class="text-primary-950">
	<slot><!-- optional fallback --></slot>
</main>
