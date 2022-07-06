<script>
	import IndexItem from '../item/IndexItem.svelte';
</script>

<div class="grid gap-2 md:grid-cols-4">
	<!-- MOST FEATURED ITEM -->
	<!-- THIS ITEM WILL TAKE 2 ROW IN MEDIUM ++ DEVICES -->
	<div class="row-span-2 py-2 px-4">
		<IndexItem />
	</div>

	<!-- THE REST ITEM -->
	{#each [...new Array(6)] as _value}
		<div class="py-2 px-4">
			<IndexItem />
		</div>
	{/each}
</div>
