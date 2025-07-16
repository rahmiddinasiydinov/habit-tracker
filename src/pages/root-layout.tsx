import { Outlet } from 'react-router-dom'

type Props = {}
export default function Rootlayout({}: Props) {
  return (
    <div className=''>
     <nav>Nav here</nav>
      <Outlet/>
    </div>
    
  )
}