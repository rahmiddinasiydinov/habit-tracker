import { useSelector } from "react-redux"
import type { UiStateValue } from "../types/ui"
import SideBarActions from "./sidebar-actions";
import useScreenWidths from "../hooks/useScreenWidths";
import SidebarHeader from "./sidebar-header";
import SidebarLinks from "./sidebar-links";

type Props = {}

export default function Sidebar({ }: Props) {
  const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen);
  const { sidebarWidth } = useScreenWidths();

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
    <div className={`relative pt-5 md:pt-10 z-100 h-dvh bg-card-background transition duration-500 ${getClassNames()}`} style={{ width: sidebarWidth }}>
      <SideBarActions />
      <SidebarHeader/>
      <SidebarLinks/>
    </div>
  )
}