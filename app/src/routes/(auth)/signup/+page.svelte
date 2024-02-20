<script lang="ts">
	import Hseparator from '$lib/components/Hseparator.svelte';
	import Label from '$lib/components/Label.svelte';
	import { ChevronLeft } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let withEmail: boolean = false;
</script>

<div class=" sig-container h-[100dvh] w-full gap-[5vw]">
	<div>
		<img
			src="/illustrations/signup.svg"
			alt="svg illustration"
			class="h-full w-full object-contain"
		/>
	</div>
	<div class="flex flex-col justify-center gap-10">
		{#if !withEmail}
			<h1 class="text-primary-950 text-2xl">Inscrivez-vous à Gris Market</h1>
			<form method="POST" class="grid max-w-max gap-4">
				<div>
					<button class="button-p button">
						<svg
							class="icon"
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 256 262"
							><path
								fill="#4285F4"
								d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
							/><path
								fill="#34A853"
								d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
							/><path
								fill="#FBBC05"
								d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
							/><path
								fill="#EB4335"
								d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
							/></svg
						>
						inscrivez-vous avec Google
					</button>
				</div>
				<div class="grid grid-cols-3">
					<Hseparator /> <span class="text-center">ou</span>
					<Hseparator />
				</div>
				<div>
					<button class="button button-o w-full" on:click={() => (withEmail = true)}>
						Continer avec l'e-mail
					</button>
				</div>
			</form>
			<p class="text-sm font-light">
				Vous avez déjà un compte? <a href="/login" class="underline underline-offset-1">
					Se connecter
				</a>
			</p>
		{:else}
			<div class="relative grid gap-10">
				<button class="button-icon button button-o" on:click={() => (withEmail = false)}>
					<ChevronLeft />
				</button>
				<h1 class="text-primary-950 text-2xl">Inscrivez-vous à Gris Market</h1>
				<form action="" class="grid max-w-max gap-2">
					<div class="flex items-center gap-2">
						<div class="grid gap-1">
							<Label label="username">Nom d'utilisateur</Label>
							<input autocomplete="off" type="text" name="username" id="username" class="input" />
						</div>
						<div class="grid gap-1">
							<Label label="email">E-mail</Label>
							<input autocomplete="off" type="email" name="email" id="email" class="input" />
						</div>
					</div>
					<div class="grid gap-1">
						<Label label="password">Mot de passe</Label>
						<input
							type="password"
							name="password"
							id="password"
							class="input"
							placeholder="6+ caractères"
						/>
					</div>
					<div class="grid gap-1">
						<Label label="passwordconfirm">Confirmer mot de passe</Label>
						<input
							type="password"
							name="passwordconfirm"
							id="passwordconfirm"
							class="input"
							placeholder="6+ caractères"
						/>
					</div>
					<div>
						<button type="submit" class="button button-p w-full"> Créer un compte </button>
					</div>
				</form>
				<p class="text-sm font-light">
					Vous avez déjà un compte? <a href="/login" class="underline underline-offset-1">
						Se connecter
					</a>
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.sig-container {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
