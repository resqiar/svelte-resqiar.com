<script lang="ts">
	import PrimaryButton from '../button/PrimaryButton.svelte';
	import { fly } from 'svelte/transition';
	import DefaultButton from '../button/DefaultButton.svelte';

	// state to keep track of mobile menu
	let openSidebar: boolean = false;
</script>

<header>
	<div class="my-6 flex justify-between px-4 md:px-14">
		<div class="flex gap-4">
			<!-- MOBILE MENU -->
			<div class="flex md:hidden">
				<button
					on:click={() => (openSidebar = !openSidebar)}
					class="mt-1 self-center rounded-full p-1 active:bg-gray-200"
					aria-label="Open Navigation Menu"
				>
					{#if !openSidebar}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</button>
			</div>

			<!-- LOGO -->
			<a href="/" class="text-2xl font-extrabold">
				ResDev<span class="text-3xl font-bold text-red-700">.</span>
			</a>
		</div>

		<nav class="hidden gap-8 md:flex">
			<a href="/" class="self-center">
				<p class="text-sm font-medium">Dashboard</p>
			</a>
			<a href="/" class="self-center">
				<p class="text-sm font-medium text-gray-600">Pricing</p>
			</a>
			<a href="/" class="self-center">
				<p class="text-sm font-medium text-gray-600">About</p>
			</a>
		</nav>

		<div>
			<DefaultButton ariaLabel="Masuk">
				<p class="text-[16px]">Masuk</p>
			</DefaultButton>
		</div>
	</div>

	<!-- MOBILE MENU ITEM -->
	<!-- HIDDEN BY DEFAULT UNTIL OPEN BY JS -->
	{#if openSidebar}
		<div
			class="-mt-4 mb-6 flex flex-col px-4 pb-4 shadow-xl"
			role="menubar"
			in:fly={{ y: -10, duration: 500 }}
			out:fly={{ y: -10, duration: 200 }}
		>
			<ul class="flex flex-col">
				{#each ['Dashboard', 'Pricing', 'About'] as value}
					<li role="menuitem">
						<a
							class="block px-2 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 lg:px-2"
							href="#!">{value}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
