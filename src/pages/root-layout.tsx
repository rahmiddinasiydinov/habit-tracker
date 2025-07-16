import Sidebar from '@/shared/components/sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}
export default function Rootlayout({}: Props) {
  return (
    <div className=''>
     <Sidebar/>
      <Outlet/>
    </div>
    
  )
}