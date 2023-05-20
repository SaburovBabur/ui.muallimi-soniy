import Link from 'next/link'
import { description, modules, title } from '@/data'
import { HomeLayout } from '@/components/Layout'
import { CaseSensitive, ChevronRight, Moon } from 'lucide-react'

function Course() {
	return (
		<HomeLayout>
			<div className="h-[20px] md:h-[50px]" />

			<h3 className="h3">{title()}</h3>

			<div className="h-[45px]" />

			<h3 className="p">{description()}</h3>

			<div className="h-[70px]" />

			<div className="w-2/3 space-y-7">
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

			<div className="h-[70px]" />
		</HomeLayout>
	)
}

export default Course
