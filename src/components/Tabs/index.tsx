'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface TabsProps<T> {
	value: T | undefined
	onChange: (activeTab: T) => unknown
	tabs: {
		jsx: React.ReactNode
		value: T
	}[]
}

const chaq = `chaq__`

function Tabs<T extends string>({ value, onChange, tabs }: TabsProps<T>) {
	const [activeTab, setActiveTab] = useState<HTMLButtonElement | null>(null)
	const [isFromNull, setIsFromNull] = useState(true)
	const tabsRef = useRef<{ [key in T]: HTMLButtonElement }>({} as { [key in T]: HTMLButtonElement })
	const navRef = useRef<HTMLDivElement>(null)

	const location = activeTab?.getBoundingClientRect()
	const navSize = navRef.current?.getBoundingClientRect()

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveTab(e.currentTarget)
	}

	const transitionDuration = isFromNull ? '0ms' : '300ms'

	useEffect(() => {
		if (value && value in tabsRef.current) {
			setActiveTab(tabsRef.current[value])
		}
	}, [value])

	useEffect(() => {
		if (isFromNull && location && !Object.keys(location).length) {
			setIsFromNull(false)
		}
	}, [activeTab])

	const activeTabValue = activeTab?.id.replace(chaq, '')

	return (
		<nav ref={navRef} className="flex items-center select-none | relative">
			<div
				style={{
					width: location?.width,
					height: location?.height,
					top: (location?.top || 0) - (navSize?.top || 0),
					left: (location?.left || 0) - (navSize?.left || 0),
					transitionDuration,
				}}
				className={clsx('boundary bg-white/20 rounded-md absolute top-0 left-0')}
			/>

			{tabs.map((tab, idx) => (
				<button
					id={`${chaq}${tab.value}`}
					ref={(ref) => (ref ? (tabsRef.current[tab.value] = ref) : null)}
					onClick={handleClick}
					className={clsx(
						'z-10 font-medium duration-def hover:font-medium cursor-pointer text-[#828387] hover:text-white',
						{
							'!text-white font-medium': activeTabValue === tab.value,
							'!duration-0': isFromNull,
						}
					)}
					key={tab.value}
				>
					{tab.jsx}
				</button>
			))}
		</nav>
	)
}

export default Tabs
