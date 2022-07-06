<script>
	import DefaultHeader from '../components/header/DefaultHeader.svelte';
	import IndexHero from '../components/hero/IndexHero.svelte';
	import IndexGridList from '../components/list/IndexGridList.svelte';
	import Meta from '../components/Meta.svelte';
</script>

<!-- META HEAD TAGS -->
<Meta />

<!-- HEADER -->
<DefaultHeader />

<!-- HERO -->
<IndexHero />

<!-- FEATURED GRID LIST -->
<section class="mt-10 lg:pr-10 lg:pl-8">
	<!-- SECTION HEADER -->
	<div class="flex items-center justify-between pr-4">
		<!-- SECTION TITLE -->
		<h1 class="mt-2 mb-2 px-4 text-xl font-bold lg:mb-8 lg:text-3xl">Kelas Unggulan Terbaik</h1>

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
