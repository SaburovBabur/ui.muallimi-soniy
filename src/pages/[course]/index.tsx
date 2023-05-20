import { HomeLayout } from '@/components/Layout'
import { TModule, modules } from '@/data'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticPaths(params: any) {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context: any) {
	const { course: moduleName } = context.params
	const course = modules().find((module) => (module.href.replace('/', '') === moduleName ? module : false))

	if (!course) {
		throw new Error()
	}

	const res = await fetch(`${process.env.URL}/${course.json}`, {
		method: 'get',
	}).then((res) => {
		return res.json()
	})

	const lessons = res.items.map((item: any) => {
		return {
			title: item.snippet.title,
			slug: item.contentDetails.videoId,
		}
	})

	const { icon, ...rest } = course

	return {
		props: { course: { course: rest, lessons }, data: res },
	}
}

function Lesson({ course }: any) {
	const router = useRouter()

	if (!course) {
		return <>Bunday kurs mavjud emas!</>
	}

	return (
		<HomeLayout>
			<div className="md:h-[50px] h-[30px]" />

			<h3 className="h2">{course.course.title}</h3>

			<div className="h-[30px]" />

			<div className="h-[50px]" />

			<div className="flex flex-col gap-7 md:gap-8 relative">
				<div className="h-[100%] w-[1px] rounded-full absolute top-0 left-[6px] md:left-[3px] bg-primary-def" />

				{course.lessons.map((lesson: any, idx: number) => (
					<div key={idx} className="flex items-center">
						<div className="h-3 w-3 md:h-[7px] md:w-[7px] rounded-md border border-primary-def bg-black z-10 bg-primary-def duration-def cursor-pointer" />

						<Link
							href={`${router.asPath}/${lesson.slug}`}
							className="p block w-full lowercase hover:text-primary-def duration-def cursor-pointer hover:bg-[#00DA83]/10 px-5 py-2 ml-1 rounded-md"
						>
							{lesson.title}
						</Link>
					</div>
				))}
			</div>

			<div className="h-[30px]" />
		</HomeLayout>
	)
}

export default Lesson
