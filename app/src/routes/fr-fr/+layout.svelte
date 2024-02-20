<script lang="ts">
	import { KanbanSquareDashed, Search, ShoppingCart } from 'lucide-svelte';
	import type { LayoutData } from './$types';

	const productsUrl = [
		{
			url: '/fr-fr/Smartphones',
			title: 'Smartphones'
		},
		{
			url: '/fr-fr/ordinateur-portable',
			title: 'Ordinateurs portables '
		},
		{
			url: '/fr-fr/tablettes',
			title: 'Tablette '
		},
		{
			url: '/fr-fr/consoles',
			title: 'Consoles '
		},
		{
			url: '/fr-fr/composants',
			title: 'Composants '
		},
		{
			url: '/fr-fr/accessoires',
			title: 'Accessoires'
		}
	];
	// export let data: LayoutData;
</script>

<header class="fixed top-0 z-40 grid w-full gap-6 bg-white px-[5vw] py-2">
	<nav class="flex w-full items-center justify-between gap-8">
		<a href="/fr-fr"> Gris Market </a>
		<form action="" class="relative flex flex-grow items-center">
			<input type="text" class="input" autocomplete="off" name="search" />
			<button type="submit" class="button button-g absolute right-0"><Search /> </button>
		</form>
		<ul class="flex items-center gap-4">
			<li>
				<a href="/fr-fr/cart">
					<button class="button button-g">
						<ShoppingCart />
					</button>
				</a>
			</li>
			<li>
				<a href="/fr-fr/dashboard">
					<button class="button button-g">
						<KanbanSquareDashed />
					</button>
				</a>
			</li>
			<li>
				<a href="/login">
					<button class="button button-p"> Connexion </button>
				</a>
			</li>
		</ul>
	</nav>
	<div class="text-primary-950 rounded-md px-4 py-2 text-sm font-light">
		<ul class="flex justify-between">
			{#each productsUrl as product}
				<li>
					<a href={product.url}>
						{product.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>

<main class="bg-primary-50 pt-[10rem]">
	<slot><!-- optional fallback --></slot>
</main>
