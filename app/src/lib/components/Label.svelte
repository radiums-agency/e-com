<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';

	export let label: string;

	const {
		elements: { root }
	} = createLabel();
</script>

<label
	for={label}
	use:melt={$root}
	class="text-primary-900 mb-0.5 font-light"
	data-melt-part="root"
	use:melt={$root}
>
	<slot><!-- optional fallback --></slot>
</label>
