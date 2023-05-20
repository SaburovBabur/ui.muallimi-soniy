import clsx from 'clsx'
import React from 'react'

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

function Container({ children, className }: ContainerProps) {
	return <div className={clsx('max-w-[850px] mx-auto container px-3', className)}>{children}</div>
}

export default Container
