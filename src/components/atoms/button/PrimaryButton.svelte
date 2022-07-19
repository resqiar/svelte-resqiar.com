<script lang="ts">
	export let extend: string = '';
	export let ariaLabel: string = 'button';
</script>

<button
	type="button"
	class="bg-primary m-0 rounded px-5 py-2.5 text-[14px] font-semibold leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#1d447e] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#163461] active:shadow-lg {extend}"
	aria-label={ariaLabel}
>
	<slot />
</button>
