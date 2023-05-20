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
				<title>Hakim Shoshiy - Yaseen.uz ⚡</title>
				<meta property="og:image" content="/bg.png" />
				<meta name="title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
				<meta name="description" content="Hakim Shoshiy - Yaseen.uz" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.Hakim Shoshiy - Yaseen.uz/" />
				<meta property="twitter:title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
				<meta property="twitter:description" content="Hakim Shoshiy - Yaseen.uz" />
				<meta property="twitter:image" content="/bg.png" />
			</Head>

			<div className={dm_sans.className}>
				<Component {...pageProps} />

				<Analytics />
			</div>
		</>
	)
}
