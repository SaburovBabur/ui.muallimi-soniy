import { CaseSensitive, Moon } from 'lucide-react'
import React from 'react'

export const title = () => `Arab tilida 0 dan o\`qishni va yozishni o\`rganish.`
export const description = () =>
	`Bu kursimizda siz arab tilidagi barcha 28 xarfni o’qilishini va yozilishini o’rganasiz, undan tashqari tajvid ilmini, ya’ni Alloh taoloning kalomi bo’lmish Quronnni to’gri o’qish qoidalarini o’zlashtirasiz, إن شاء الله.`

export const modules = () => [
	{
		title: `Xarflar`,
		icon: <CaseSensitive size={20} />,
		json: `xarflar.json`,
		href: `/xarflar`,
	},
	{
		title: `Tajvid`,
		icon: <Moon size={20} />,
		json: 'tajvid.json',
		href: `/tajvid`,
	},
]

export interface TModule {
	title: string
	icon: React.ReactNode
	json: string
	href: string
}
