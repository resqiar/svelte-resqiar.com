<script lang="ts">
	import { __categories } from '../../../__mockup/categories';

	import BadgeButtton from '../../button/BadgeButtton.svelte';

	// State to keep track of the index of active category
	let activeIndex: number | null;

	function toggleSelected(index: number) {
		if (index === activeIndex) return (activeIndex = null);
		activeIndex = index;
	}
</script>

<div class="mt-2 flex flex-col">
	<!-- CATEGORY LIST -->
	<!-- IMPORTANT: CATEGORY LISTED HERE ONLY USED FOR FAST NAVIGATION ONLY. -->
	<!-- MEANING YOU SHOULD NOT DUMP THE CATEGORIES ALL AT ONCE -->
	<!-- PICK THE MOST FREQUENT or THE MOST IMPORTANT ONE. -->
	<div class="hide-scrollbar flex flex-row items-center gap-2 overflow-x-scroll pt-1">
		{#each __categories as v (v.id)}
			<BadgeButtton on:click={() => toggleSelected(v.id)} isSelected={v.id === activeIndex}>
				{v.text}
			</BadgeButtton>
		{/each}
	</div>

	<!-- ITEMS -->
	<div class="h-[500px] w-full" />
</div>
