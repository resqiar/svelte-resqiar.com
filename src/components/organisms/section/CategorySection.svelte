<script lang="ts">
	import scrollTo from '../../../libs/scrollTo';

	import { __categories } from '../../../__mockup/categories';
	import BadgeButtton from '../../atoms/button/BadgeButtton.svelte';
	import RoundedButton from '../../atoms/button/RoundedButton.svelte';
	import SmGridItem from '../../atoms/item/SmGridItem.svelte';

	// State to keep track of the index of active category
	let activeIndex: number | null;

	function toggleSelected(index: number) {
		if (index === activeIndex) return (activeIndex = null);
		activeIndex = index;
	}

	/**
	 * State to control the scroll movement of the container.
	 * Each item has a 250px width, but we need to scroll 2 items at once,
	 * so we multiply them by 2, you can customize this as you wish.
	 * @see scrollTo.ts
	 */
	let containerRef: HTMLDivElement;
	const scrollDistance: number = 250 * 2;
</script>

<div class="mt-2 flex flex-col">
	<div class="flex items-center justify-between">
		<!-- CATEGORY LIST -->
		<!-- IMPORTANT: CATEGORY LISTED HERE ONLY USED FOR FAST NAVIGATION ONLY. -->
		<!-- MEANING YOU SHOULD NOT DUMP THE CATEGORIES ALL AT ONCE -->
		<!-- PICK THE MOST FREQUENT or THE MOST IMPORTANT ONE. -->
		<div class="hide-scrollbar flex flex-row items-center gap-2 overflow-x-scroll pt-1">
			{#each __categories as v (v.id)}
				<BadgeButtton
					on:click={() => toggleSelected(v.id)}
					isSelected={v.id === activeIndex}
				>
					{v.text}
				</BadgeButtton>
			{/each}
		</div>

		<!-- LARGER SCREEN HORIZONTAL SCROLL NAVIGATION -->
		<!-- HIDDEN ON -->
		<div class="flex items-center gap-2 lg:flex">
			<!-- LEFT SCROLL -->
			<RoundedButton
				on:click={() =>
					scrollTo({
						ref: containerRef,
						direction: 'left',
						distance: scrollDistance,
					})}
				extend="border-solid border border-slate-500 active:bg-red-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</RoundedButton>

			<!-- RIGHT SCROLL -->
			<RoundedButton
				on:click={() =>
					scrollTo({
						ref: containerRef,
						direction: 'right',
						distance: scrollDistance,
					})}
				extend="border-solid border border-slate-500 active:bg-red-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</RoundedButton>
		</div>
	</div>

	<!-- ITEMS -->
	<div bind:this={containerRef} class="hide-scrollbar flex gap-2 overflow-x-scroll py-4">
		{#each [...new Array(10)] as _v, index}
			<div class="">{(index += 1)}</div>
			<SmGridItem />
		{/each}
	</div>
</div>
