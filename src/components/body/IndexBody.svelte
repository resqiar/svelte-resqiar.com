<script>
	import { __popularSearch } from '../../__mockup/popularSearch';

	import IndexHero from '../hero/IndexHero.svelte';
	import IndexGridList from '../list/IndexGridList.svelte';
	import SearchInput from '../search/SearchInput.svelte';
</script>

<main>
	<!-- HERO -->
	<IndexHero />

	<!-- SUPPORTED BRANDS -->
	<section
		id="brands-support"
		class="mt-6 flex flex-col items-center justify-around bg-white py-4 px-4 lg:mt-20 lg:px-12 xl:mt-4 xl:flex-row"
	>
		<div class="flex w-full flex-col">
			<p class="font-semibold">Dipercaya Oleh</p>
			<p class="text-sm">Berbagai industri teknologi internasional.</p>
		</div>

		<!-- BRANDS LOGO -->
		<!-- NOTE: YOU CAN EASILY CHANGE SVG TO PNG FOR BETTER TRANSPARANCY CONTROL-->
		<!-- HERE I USE SVGs BECAUSE IT IS EASY TO EDIT THE COLOR FROM THE CODE -->
		<div
			class="mt-2 flex w-full flex-row flex-wrap items-center justify-evenly gap-2 lg:flex-nowrap lg:gap-10"
		>
			<!-- META -->
			<object
				data="/images/brands/Meta_logo.svg"
				class="w-[125px] lg:w-[200px]"
				title="Meta Logo"
				width="200"
				height="30"
			/>
			<!-- SLACK -->
			<object
				data="/images/brands/Slack_Monochrome_Black.svg"
				class="w-[125px] lg:w-[200px]"
				title="Slack Logo"
				width="200"
				height="80"
			/>
			<!-- DISCORD -->
			<object
				data="/images/brands/Discord-Logo+Wordmark-Black.svg"
				class="w-[125px] lg:w-[200px]"
				title="Discord Logo"
				width="200"
				height="70"
			/>
			<!-- TwitterSpace -->
			<object
				data="/images/brands/TwitterSpaces.svg"
				class="w-[125px] lg:w-[200px]"
				title="TwitterSpace Logo"
				width="200"
				height="80"
			/>
		</div>
	</section>

	<!-- SEARCH SECTION -->
	<section id="cari-kelas" class="flex flex-col gap-6 py-14 md:px-2 lg:px-14">
		<div class="flex flex-col items-center px-2">
			<p class="text-center text-lg font-semibold lg:text-xl">Lorem ipsum dolor sit amet.</p>
			<p class="lg:text-md text-center text-sm">
				Lorem ipsum dolor, consectetur elit. A, placeat?
			</p>
		</div>

		<div class="flex flex-col gap-4 lg:w-3/4 lg:gap-4 lg:self-center">
			<!-- SEARCH INPUT -->
			<SearchInput />

			<!-- POPULAR SEARCH -->
			<div class="flex flex-col px-4 lg:flex-row lg:gap-x-2">
				<p>Pencarian Poluler:</p>

				<div class="flex flex-row flex-wrap gap-x-1">
					{#each __popularSearch as value, index}
						<a href="#!" class="font-semibold text-purple-500 hover:underline"
							>{value}{index !== __popularSearch.length - 1 ? ',' : ''}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- FEATURED GRID LIST -->
	<section class="mt-10 lg:pr-10 lg:pl-8">
		<!-- SECTION HEADER -->
		<div class="flex items-center justify-between pr-4">
			<!-- SECTION TITLE -->
			<h1 class="mt-2 mb-2 px-4 text-xl font-bold lg:mb-8 lg:text-3xl">
				Kelas Unggulan Terbaik
			</h1>

			<!-- SEE MORE NAVIGATION -->
			<a href="#!" class="flex items-center gap-2 hover:underline">
				<p class="hidden md:flex">Selengkapnya</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>

		<!-- GRID LIST -->
		<IndexGridList />
	</section>
</main>
