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
			<header>
				<Link href={'/'}>
					<Logo />
				</Link>
			</header>

			{children}
		</>
	)
}

export default Header
