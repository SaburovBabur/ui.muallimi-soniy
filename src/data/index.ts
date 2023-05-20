export const courses: () => TypeCourse[] = () => [
	{
		slug: 'durusul-lugah-1-kitob',
		json: 'durusul-lugah-1.json',
		file: 'https://drvaniya.com/wp-content/uploads/2021/09/Madinah-Book_1-colour.pdf',
		image: {
			url: '/book-1.webp',
			alt: 'Durusul lughatil 1-kitob rasmi',
		},
		count: 29,
		title: '1 - kitob',
		subTitle: 'Durusul lug`ah',
		description: `Kurs arab tilini 0 dan boshlayotkanlar uchun. Davomiyligi ~1 oy.`,
		level: {
			title: 'Boshlang`ich',
			num: 1,
		},
		lessons: [],
	},
	{
		slug: 'durusul-lugah-2-kitob',
		file: 'http://drvaniya.com/wp-content/uploads/2019/09/%D8%AF%D8%B1%D9%88%D8%B3-%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Madinah-Book-2.pdf',
		json: 'durusul-lugah-2.json',
		image: {
			url: '/book-2.webp',
			alt: 'Durusul lughatil 2-kitob rasmi',
		},
		count: 33,
		title: '2 - kitob',
		subTitle: 'Durusul lug`ah',
		description: 'Kurs 1 kitobning davomi. Davomiyligi ~2-3 oy uchun mo`ljallangan.',
		level: {
			title: 'O’rtacha',
			num: 2,
		},
		lessons: [
			{
				slug: 'asd',
				title: 'asd',
				html: `<iframe width="100%" height="350"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen src="https://www.youtube.com/embed/_h4tD4CxLEQ"></iframe>`.trim(),
			},
		],
	},

	{
		slug: 'durusul-lugah-3-kitob',
		json: 'durusul-lugah-3.json',
		file: 'http://drvaniya.com/wp-content/uploads/2019/09/%D8%AF%D8%B1%D9%88%D8%B3-%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Madinah-Book-3-lessons-1-17.pdf',
		image: {
			url: '/book-3.webp',
			alt: 'Durusul lughatil 3-kitob rasmi',
		},
		count: 45,
		title: '3 - kitob',
		subTitle: 'Durusul lug`ah',
		description: 'Kurs 2 kitobning davomi. Davomiyligi ~3-4 oy uchun mo`ljallangan.',
		level: {
			title: 'Yuqori',
			num: 3,
		},
		lessons: [],
	},
]

export interface TypeCourse {
	slug: string
	title: string
	json: string
	image: {
		url: string
		alt: string
	}
	count: number
	subTitle: string
	description: string
	file: string
	level: TypeCourseLevel
	lessons: TypeCourseLesson[]
}

export interface TypeCourseLevel {
	title: string
	num: number
}

export interface TypeCourseLesson {
	slug: string
	title: string
	html: string
}
