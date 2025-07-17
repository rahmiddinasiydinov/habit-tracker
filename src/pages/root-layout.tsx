import { useSelector } from "react-redux"

import Sidebar from '@/shared/components/sidebar'
import { Outlet } from 'react-router-dom'
import type { UiStateValue } from '../shared/types/ui'
import { getMainContentWidth } from '@/shared/utils/width-services'


type Props = {}
export default function Rootlayout({ }: Props) {
  const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen)

  return (
    <div className=''>
      <Sidebar />
      <div className={`${!isSidebarOpen?'pl-30':'pl-10'} h-dvh bg-dashboard-primary absolute top-0 right-0 grow-1  transition duration-1000`} style={{width: getMainContentWidth(isSidebarOpen)}}>
        <Outlet />
      </div>
    </div>

  )
}