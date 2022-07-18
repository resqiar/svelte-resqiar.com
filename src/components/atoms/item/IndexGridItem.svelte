<script lang="ts">
	export let imageUrl: string;
	export let alt: string;
	export let title: string = '';
	export let description: string = '';
	export let extendImg: string = '';
</script>

<div class="flex h-full flex-col rounded-lg bg-white p-4">
	<img
		class="w-full flex-grow rounded-lg object-cover {extendImg}"
		src={imageUrl}
		{alt}
		height="400"
		width="300"
	/>
	<h1 class="mt-4 text-xl font-semibold">{title}</h1>
	<p>{description}</p>
</div>
