import { useSelector } from "react-redux"

import Sidebar from '@/shared/components/sidebar'
import { Outlet } from 'react-router-dom'
import type { UiStateValue } from '../shared/types/ui'
import useScreenWidths from "@/shared/hooks/useScreenWidths"


type Props = {}
export default function Rootlayout({ }: Props) {
  const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen);
  const {mainContentWidth} = useScreenWidths();
// console.log(mainContentWidth , 'main');

  return (
    <div className=''>
      <Sidebar />
      <div className={`${!isSidebarOpen ? 'pl-30' : 'pl-10'} h-dvh bg-dashboard-primary absolute top-0 right-0 grow-1  transition duration-1000`} style={{ width: mainContentWidth}}>
        <Outlet />
      </div>
    </div>

  )
}