import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Maincontent({children}: Props) {
    
  return (
    <div className='w-[100%]'>{children}</div>
  )
}