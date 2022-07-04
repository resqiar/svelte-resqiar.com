<script>
	import { __heroMockup } from '../../__mockup/heroItem';

	import PrimaryButton from '../button/PrimaryButton.svelte';
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
			<PrimaryButton extend="w-full md:w-fit" text="Learn More" />
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
		<img src="/images/index-hero-mockup.png" alt="Hero Brand" />
	</div>
</section>
