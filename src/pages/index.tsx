import Link from 'next/link'
import { description, modules, title } from '@/data'
import { HomeLayout } from '@/components/Layout'
import { ChevronRight } from 'lucide-react'

function Course() {
	return (
		<HomeLayout>
			<div className="h-[30px] md:h-[50px]" />

			<h3 className="h3">{title()}</h3>

			<div className="h-[45px]" />

			<h3 className=" p">{description()}</h3>

			<div className="h-[50px] md:h-[50px]" />

			<div className="w-full md:w-2/3 space-y-7">
				{modules().map((module) => (
					<Link
						href={module.href}
						key={module.title}
						className="bg-white/10 | flex items-center justify-between | p-3.5 | cursor-pointer active:scale-95 duration-def rounded-md"
					>
						<div className="flex items-center gap-5">
							{module.icon}
							<h3>{module.title}</h3>
						</div>
						<ChevronRight size={20} />
					</Link>
				))}
			</div>

			<div className="md:h-[250px] h-[150px]" />
		</HomeLayout>
	)
}

export default Course
