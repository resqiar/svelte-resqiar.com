<script lang="ts">
	export let text: string;
	export let extend: string;
</script>

<button
	type="button"
	class="m-0 rounded bg-blue-600 px-5 py-2.5 text-[14px] font-semibold leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg {extend}"
	>{text}</button
>
