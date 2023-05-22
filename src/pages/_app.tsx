import type { AppProps } from 'next/app'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import '@/styles/tailwind.css'

const dm_sans = DM_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				{/* <!-- Primary Meta Tags --> */}
				<title>Muallimi Soniy - Yaseen.uz ⚡</title>
				<meta property="og:image" content="/bg.webp" />
				<meta name="title" content="Muallimi Soniy - Yaseen.uz" />
				<meta name="description" content="Muallimi Soniy - Yaseen.uz" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.muallimi.yaseen.uz/" />
				<meta property="twitter:title" content="Muallimi Soniy - Yaseen.uz" />
				<meta property="twitter:description" content="Muallimi Soniy - Yaseen.uz" />
				<meta property="twitter:image" content="/bg.webp" />
			</Head>

			<div className={dm_sans.className}>
				<Component {...pageProps} />

				<Analytics />
			</div>
		</>
	)
}
