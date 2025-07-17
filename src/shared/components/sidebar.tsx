import { useSelector } from "react-redux"
import type { UiStateValue } from "../types/ui"
import SideBarActions from "./sidebar-actions";
import { getSidebarWidthInPixels } from "../utils/width-services";

type Props = {}

export default function Sidebar({ }: Props) {
  const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen);

  const getClassNames = () => {
    let classNames = '';

    if (isSidebarOpen) {
      classNames += ' translate-x-[0]'
    } else {
      classNames += ` -translate-x-[100%]`
    }
    return classNames;
  }

  return (
    <div className={`relative z-100 h-dvh bg-card-background transition duration-500 ${getClassNames()}`} style={{width: getSidebarWidthInPixels()}}>
      <SideBarActions />
    </div>
  )
}