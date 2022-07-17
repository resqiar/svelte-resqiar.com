interface Category {
	// ID OF THE CATEGORY MUST BE UNIQUE,
	// OTHERWISE SELECTION WON'T WORK CORRECTLY.
	id: number;
	text: string;
}

export const __categories: Category[] = [
	{
		id: 1,
		text: 'Free',
	},
	{
		id: 2,
		text: 'Premium',
	},
	{
		id: 3,
		text: 'Paling Dicari',
	},
	{
		id: 4,
		text: 'Paling Populer',
	},
	{
		id: 5,
		text: 'Sekali Beli',
	},
	{
		id: 6,
		text: 'Akses Selamanya',
	},
	{
		id: 7,
		text: 'Android',
	},
	{
		id: 8,
		text: 'IOT',
	},
];
