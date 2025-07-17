import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function MainContentHeader({children}: Props) {
  return (
    <h1 className='text-lg md:text-4xl font-bold text-text-primary'>
        {children}
    </h1>
  )
}