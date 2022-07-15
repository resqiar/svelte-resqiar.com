<script lang="ts">
	export let extend: string = '';
</script>

<div class="mx-2 flex items-center rounded bg-white px-3 shadow-md focus-within:shadow-lg {extend}">
	<div class="mr-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>
	<div class="w-full">
		<input
			type="text"
			class="placeholder:text-slate-40 w-full py-3 outline-none placeholder:italic"
			placeholder="Cari Kelas"
		/>
	</div>
</div>
