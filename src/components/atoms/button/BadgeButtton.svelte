<script lang="ts">
	export let isSelected: boolean = false;
	/**
	 * Derived state to control the changes.
	 * When isSelected variabled change, the value below-
	 * will also changes, think of it like useEffect in react.
	 */
	$: selectedBg = isSelected ? 'bg-primary' : 'bg-slate-200';
	$: selectedHover = isSelected ? 'hover:bg-primary-hover' : 'hover:bg-slate-300';
	$: isBold = isSelected ? 'font-medium' : 'font-normal';
	$: textColor = isSelected ? 'text-white' : 'text-black';
</script>

<button
	on:click
	class="cursor-pointer whitespace-nowrap rounded px-4 py-1 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:duration-150 {isBold} {selectedBg} {selectedHover} {textColor}"
>
	<slot />
</button>
