import { useSelector } from "react-redux"
import type { reduxStoreValue } from "../types/ui"

type Props = {}

export default function Sidebar({ }: Props) {
  const isSidebarOpen = useSelector((state:reduxStoreValue )=> state.ui.isSidebarOpen)
console.log(isSidebarOpen);

  return (
    <div className='absolute left-0 top-0 h-dvh bg-card-background w-[15%]'>

    </div>
  )
}