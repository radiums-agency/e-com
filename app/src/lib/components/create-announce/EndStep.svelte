<script lang="ts">
	import Label from "../Label.svelte";
  import { createSelect, melt } from '@melt-ui/svelte';
	import { Check, ChevronDown } from 'lucide-svelte';
	import { fade } from 'svelte/transition';


  const options = {
    priode: ['Jour(s)', 'Semaine(s)', 'Mois', 'Année(s)'],
   
  };
  
  const {
    elements: { trigger, menu, option, group, groupLabel, label, hiddenInput },
    states: { selectedLabel, open },
    helpers: { isSelected },
  } = createSelect<string>({
    forceVisible: true,
    positioning: {
      placement: 'bottom',
      fitViewport: true,
      sameWidth: true,
    },
    loop: true,
    name: "guaranteeTime"
  });
</script>

<div class=" grid gap-2 w-[27rem]">
  <div class="grid grid-cols-2 gap-2 w-[27rem]">
    <div>
      <Label label="guaranteeNumber">Nombre</Label>
			<input id="guaranteeNumber" type="number" name="guaranteeNumber" class="w-[27rem] input" />
    </div>
    <div>
      <div class="flex flex-col ">
        <!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
        <label class="block text-primary-900 font-light" use:melt={$label}>Selectiooner une période</label>
        <button
          class="flex h-10 min-w-[220px] border border-primary-300 items-center justify-between rounded-lg bg-white px-3 py-2
        text-primary-700  transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
          use:melt={$trigger}
          aria-label="Food"
        >
          {$selectedLabel || ' Période'}
          <ChevronDown class="square-5" />
        </button>
        {#if $open}
          <div
            class="z-10 flex max-h-[300px] flex-col
          overflow-y-auto rounded-lg bg-white p-1
          shadow focus:!ring-0"
            use:melt={$menu}
            transition:fade={{ duration: 150 }}
          >
            {#each Object.entries(options) as [key, arr]}
              <div use:melt={$group(key)}>
                <div
                  class="py-1 pl-4 pr-4 font-semibold capitalize text-neutral-800"
                  use:melt={$groupLabel(key)}
                >
                  {key}
                </div>
                {#each arr as item}
                  <div
                    class="relative cursor-pointer rounded-lg py-1 pl-8 pr-4 text-neutral-800
                    hover:bg-primary-100 focus:z-10
                    focus:text-primary-700
                    data-[highlighted]:bg-primary-200 data-[highlighted]:text-primary-900
                    data-[disabled]:opacity-50"
                    use:melt={$option({ value: item, label: item })}
                  >
                    <div class="check {$isSelected(item) ? 'block' : 'hidden'}">
                      <Check class="square-4" />
                    </div>
       
                    {item}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        {/if}
      </div>
      <input use:melt={$hiddenInput}>
    </div>
  </div>
  <div>
    <Label label="productPrice">
      Prix du produit
    </Label>
    <input type="number" id="productPrice" name="productPrice" class="input"/>
  </div>
</div>