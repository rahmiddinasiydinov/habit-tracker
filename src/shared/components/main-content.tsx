import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import type { UiStateValue } from '../types/ui'
import useScreenWidths from '../hooks/useScreenWidths';

export default function Maincontent() {
  const isSidebarOpen = useSelector((state:UiStateValue) => state.ui.isSidebarOpen);
    const {mainContentWidth} = useScreenWidths();

  return (
    <div className={`${!isSidebarOpen ? 'pl-30' : 'pl-10'} pt-2 md:pt-5 h-dvh  absolute top-0 right-0 grow-1  transition duration-1000`} style={{ width: mainContentWidth }}>
      <Outlet />
    </div>
  )
}