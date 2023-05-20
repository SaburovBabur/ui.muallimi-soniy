import Logo from '@/components/Logo'
import Tabs from '@/components/Tabs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface HeaderProps {
	children?: React.ReactNode
}

function Header({ children }: HeaderProps) {
	const pathname = usePathname()

	const activeTab = () => {
		if (pathname.includes('durusul-lugah')) {
			return 'durusul-lugah'
		}

		if (pathname.includes('ajurrumiyya')) {
			return 'ajurrumiyya'
		}

		if (pathname.includes('nahv-tatbiqiy')) {
			return 'nahv-tatbiqiy'
		}

		return 'durusul-lugah'
	}

	return (
		<>
			<header className="flex-col md:flex-row space-y-5 md:space-y-0 flex items-center justify-between">
				<Link href={'/'}>
					<Logo className="h-5" />
				</Link>

				<Tabs
					onChange={(tab) => console.log(tab)}
					value={activeTab()}
					tabs={[
						{
							jsx: (
								<Link href={`/durusul-lugah`} className="px-2 py-1 md:px-4 md:py-1 block">
									durusul lug`ah
								</Link>
							),
							value: 'durusul-lugah',
						},
						{
							jsx: (
								<Link href={`/ajurrumiyya`} className="px-2 py-1 md:px-4 md:py-1 block">
									ajurrumiyya
								</Link>
							),
							value: 'ajurrumiyya',
						},
						{
							jsx: (
								<Link href={`/nahv-tatbiqiy`} className="px-2 py-1 md:px-4 md:py-1 block">
									nahv tatbiqiy
								</Link>
							),
							value: 'nahv-tatbiqiy',
						},
					]}
				/>
			</header>

			{children}
		</>
	)
}

export default Header
