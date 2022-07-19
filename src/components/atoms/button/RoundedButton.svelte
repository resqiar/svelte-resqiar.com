<script lang="ts">
	export let extend: string = '';
</script>

<button on:click class="rounded-full p-2 shadow-xl {extend}">
	<slot />
</button>
