import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import React from 'react'

export function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			<div className="py-5 md:py-7">
				<Header />
			</div>

			{children}

			<div className="py-10 md:py-10">
				<Footer />
			</div>
		</Container>
	)
}
