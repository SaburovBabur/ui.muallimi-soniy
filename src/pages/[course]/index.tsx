import SvgEmpty from '@/SvgEmpty'
import Link from 'next/link'
import { TypeCourse, courses } from '@/data'
import { HomeLayout } from '@/components/Layout'

export async function getStaticPaths(params: any) {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context: any) {
	const { course: courseName } = context.params

	return {
		props: { courses: courses(), courseName },
	}
}

function Course({ courses, courseName }: { courses: TypeCourse[]; courseName: string }) {
	return (
		<HomeLayout>
			<div className="h-[20px] md:h-[50px]" />

			<div className="space-y-10 md:space-y-14">
				{courseName === 'durusul-lugah' ? (
					<>
						<h3 className="h1 flex items-center">📚 Durusul lug`ah</h3>

						{courses.map((course, idx) => (
							<Link
								href={`/${courseName}/${course.slug}`}
								replace={false}
								key={course.slug}
								className="w-full rounded-lg bg-white/10 py-3 px-3 md:py-4 md:px-4 cursor-pointer | flex gap-5 md:gap-7 hover:scale-[102%] duration-def relative"
							>
								<div className="absolute left-2 top-3 " style={{ filter: 'blur(30px)' }}>
									<img
										src={course.image.url}
										alt={course.image.alt}
										className="select-none aspect-auto md:h-[200px] h-[150px]"
									/>
								</div>

								<img
									src={course.image.url}
									alt={course.image.alt}
									className="select-none relative aspect-auto md:h-[200px] h-[150px]"
								/>

								<div className="flex flex-col justify-between md:py-2">
									<h3 className="h1">{course.title}</h3>
									<p className="p">{course.subTitle}</p>

									<div className="flex items-center gap-5 md:gap-20">
										<div className="flex items-center gap-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
												/>
											</svg>

											<p className="p/2">{course.count}</p>
										</div>

										<div className="flex items-center gap-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												viewBox="0 0 24 24"
											>
												<path d="M12 20L12 10" stroke={course.level.num > 1 ? '#00DA83' : ''}></path>
												<path d="M18 20L18 4" stroke={course.level.num > 2 ? '#00DA83' : ''}></path>
												<path d="M6 20L6 16" stroke={course.level.num > 0 ? '#00DA83' : ''}></path>
											</svg>

											<p className="p/2">{course.level.title}</p>
										</div>
									</div>

									<div className="flex items-center gap-2">
										<p className="p/2 text-white/70 ">{course.description}</p>
									</div>
								</div>
							</Link>
						))}
					</>
				) : (
					<div className="h-1/3">
						<h3 className="h1 flex items-center justify-center">Tez orada إن شاء الله</h3>

						<SvgEmpty />
					</div>
				)}
			</div>

			<div className="h-[30px]" />
		</HomeLayout>
	)
}

export default Course
