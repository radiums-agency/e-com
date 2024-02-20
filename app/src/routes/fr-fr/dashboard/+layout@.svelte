<script lang="ts">
	import type { LayoutData } from './$types';
	import AvatarDropdown from '$lib/components/AvatarDropdown.svelte';

	export let data: LayoutData;
</script>

<header class="px-[5vw] py-2 w-full fixed top-0 z-20 bg-white border-b b">
	<nav class="w-full flex items-center justify-between">
		<a href="/fr-fr"> Gris Market </a>
		<ul class="flex gap-2 items-center">
			<li>
				<a href="/fr-fr/dashboard/user/66565">
					<button class="button button-p ">
						dashboard
					</button>
				</a>
			</li>
			<li>
				<button class="button button-p"> Commandes </button>
			</li>
			<li>
				<a href="/fr-fr/dashboard/user/566565/create-announce"><button class="button button-p"> Creer une annonce </button></a>
			</li>
			<li>
				<AvatarDropdown />
			</li>
		</ul>
	</nav>
</header>

<slot><!-- optional fallback --></slot>
