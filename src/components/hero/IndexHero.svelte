<script>
	import { __heroMockup } from '../../__mockup/heroItem';
	import DefaultButton from '../button/DefaultButton.svelte';
	import PrimaryButton from '../button/PrimaryButton.svelte';
	import Image from 'svelte-image';
</script>

<section class="flex flex-col-reverse justify-center gap-2 px-4 md:flex-row lg:px-8">
	<!-- LEFT SECTION -->
	<div class="mt-2 flex h-auto flex-col justify-center md:w-6/12 md:px-6">
		<h1 class="text-3xl font-black lg:text-4xl">
			Belajar Koding Bareng, Sekarang Jadi Lebih Mudah!
		</h1>

		<p class="mt-4 text-gray-700">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eveniet doloremque
			repudiandae laborum illo minus porro aliquam laudantium reprehenderit ullam?
		</p>

		<div class="mt-6 flex w-full gap-2">
			<PrimaryButton extend="w-3/5 md:w-fit" ariaLabel="Gabung Sekarang"
				>Gabung Sekarang</PrimaryButton
			>
			<DefaultButton extend="w-6/12 md:w-fit flex items-center gap-2" ariaLabel="Cari Kelas">
				<p>Cari Kelas</p>
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
			</DefaultButton>
		</div>

		<!-- Hero Item -->
		<div class="mt-8 flex justify-around gap-1 md:justify-start md:gap-8 lg:mt-20 lg:-mb-12">
			{#each __heroMockup as value}
				<div>
					<h3 class="text-xl font-semibold">{value.title}</h3>
					<p class="text-gray-800">{value.shortDescription}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- RIGHT SECTION  -->
	<div class="px-2 md:w-6/12 lg:pr-10">
		<Image src="/images/index-hero-mockup.png" width="640" height="360" alt="Hero Brand" />
	</div>
</section>
