<script lang="ts">
	import { __featuredItems } from '../../__mockup/featuredItems';
	import type { FeaturedItemsMockupInterface } from '../../__mockup/featuredItems';
	import IndexItem from '../item/IndexItem.svelte';
	/**
	 *  Filtered item of featured items.
	 *  Only one item should be the most featured so to say.
	 *  But it is up to you to customize, or even use API to query items,
	 *  @see featuredItems.ts
	 */
	const mostFeatured: FeaturedItemsMockupInterface[] = [];
	const restFeatured: FeaturedItemsMockupInterface[] = [];
	__featuredItems.forEach((v) => (v.mostFeatured ? mostFeatured.push(v) : restFeatured.push(v)));
</script>

<div class="grid md:grid-cols-2 md:gap-2 lg:grid-cols-4">
	<!-- MOST FEATURED ITEM -->
	<!-- THIS ITEM WILL TAKE 2 ROW IN MEDIUM ++ DEVICES -->
	{#if mostFeatured[0]}
		<div class="row-span-2 md:py-2">
			<IndexItem
				title={mostFeatured[0].title}
				description={mostFeatured[0].description}
				imageUrl={mostFeatured[0].imageUrl}
				alt="Item Kelas"
				extendImg="max-h-[200px] md:max-h-full"
			/>
		</div>
	{/if}

	<!-- THE REST ITEM -->
	{#each restFeatured as value}
		<div class="md:py-2">
			<IndexItem
				title={value.title}
				description={value.description}
				imageUrl={value.imageUrl}
				alt="Item Kelas"
				extendImg="max-h-[200px]"
			/>
		</div>
	{/each}
</div>
