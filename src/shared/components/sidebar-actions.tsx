import { useDispatch, useSelector } from "react-redux"
import type { UiStateValue } from "../types/ui"
import { Button } from "@/components/ui/button";
import { uiActions } from "@/store/ui-slice";
type Props = {}

export default function SideBarActions({ }: Props) {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen);

    const handleOpen = () => {
        dispatch(uiActions.openSideBar())
    }
    const handleClose = () => {
        dispatch(uiActions.closeSideBar())
    }

    const getMenuButtonClassNames = () => {
        let classNames = '';

        if (isSidebarOpen) {
            classNames += ' -translate-x-[100%]'
        } else {
            classNames += ` translate-x-[0]`
        }

        return classNames;

    }
    return (
        <>
            <Button   className="absolute top-2 right-0 text-xl md:text-3xl text-text-primary cursor-pointer" variant={"ghost"} onClick={handleClose}>
                X
            </Button>
            <Button hidden={isSidebarOpen} className={`absolute -z-1 top-2 -right-25 pl-5 text-xl md:text-3xl text-text-primary cursor-pointer border-card-background transition translate-x-1 ${getMenuButtonClassNames()}`} variant={"ghost"} style={{ backgroundColor: ' var(--color-card-background)' }} onClick={handleOpen}>
                Menu
            </Button>
        </>
    )
}