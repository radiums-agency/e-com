<script lang="ts">
	import Label from '$lib/components/Label.svelte';
	import Select from './Select.svelte';
	import type { PageData } from './$types';
	import Input from '$lib/components/Input.svelte';
	import Smartphone from '$lib/components/create-announce/Smartphone.svelte';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import EndStep from '$lib/components/create-announce/EndStep.svelte';
	import TwoStep from '$lib/components/create-announce/TwoStep.svelte';
	import Pc from '$lib/components/create-announce/Pc.svelte';

	export let data: PageData;

	


	
	const progress = tweened(33.33, {
		duration: 300,
		easing: quadInOut
	})

	let step = 1

	function nextForm () {
		step += 1
		$progress = 33.33 * step
	}
	function PrevForm () {
		step -= 1
		$progress = 33.33 * step
	}


	

</script>

<section class="text-primary-950 flex min-h-[100dvh] gap-6">
	<div class="w-[30rem] flex-shrink-0 flex flex-col justify-between pt-[7rem]">
		<div>

		</div>
		<div class="h-[200px] ">
			<img
				src="/illustrations/money.svg"
				alt="svg illustration"
				class="h-[200px] w-full object-contain object-bottom"
			/>
		</div>
	</div>
	<div class="flex flex-grow flex-col items-center justify-start gap-10 pt-[7rem]">
		<h1 class=" w-[25rem] text-2xl">Creer une annonce</h1>
		<div class="w-[27rem] grid gap-2">
			<span class="text-center font-light text-sm">
				Etape {step} / 3
			</span>
			<div class="w-full h-1 bg-primary-100">
				<span class="progress h-full bg-primary-400 block" style="width: {$progress}%;"></span>
			</div>
		</div>
		<form action="" method="POST" class="flex flex-col w-[28rem] gap-4 overflow-hidden ">
			<ul class="w-[84rem] flex gap-2 p-1"  class:step-1={step === 1}  class:step-2={step === 2}  class:step-3={step === 3}>
				<li class="flex-shrink-0  w-[28rem]">
					<div class="w-[27rem]">
						<div class="grid gap-1">
							<Label label="productBrand">Marque du produit</Label>
						<input type="text" name="productBrand" id="productBrand" class="input" autocomplete="off" >
						</div>
						<div>
							<Select />
						</div>
					</div>
				</li> 
				<li class="flex-shrink-0  w-max">
					<!-- <Smartphone/> -->
					<Pc/>
				</li>
				<li class="flex-shrink-0  w-max">
					<EndStep/>
				</li>
			</ul>
		
			<!-- <Smartphone/> -->
			<div class="grid grid-cols-2 gap-2 ">
				<button on:click={PrevForm}  disabled={step === 1} type="button" class="button button-o w-full"> Précédent </button>
				<button on:click={nextForm} disabled={step === 3} type="button" class="button button-o w-full"> Suivant </button>
			</div>
		</form>
	</div>
</section>

<style>

	.progress {
		width: 33.3% ;
	}

	ul {
		transition: transform 0.3s ease;
	}

	.step-1 {
		transform: translateX(0.5%);
	}
	.step-2 {
		transform: translateX(-33.33%);
	}
	.step-3 {
		transform: translateX(-66.66%);
	}

	
</style>
