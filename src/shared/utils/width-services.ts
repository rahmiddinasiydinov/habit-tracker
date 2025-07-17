import { RESPONSIVE_DESIGN_CHANGE, SIDEBAR_WIDTH, SIDEBAR_WIDTH_MD, WINDOW_WIDTH } from "./constants"

const getSidebarWidth = () => {
    const sidebarWidth = WINDOW_WIDTH > RESPONSIVE_DESIGN_CHANGE ? SIDEBAR_WIDTH_MD : SIDEBAR_WIDTH;
    return sidebarWidth;
}

export const getSidebarWidthInPixels = () => {
    return getSidebarWidth() + 'px';
}

export const getMainContentWidth = (isSideBarOpen:boolean) => {
    let width = '100%'
    
    if(isSideBarOpen){
        width = (WINDOW_WIDTH - getSidebarWidth()) + 'px';
    }

    return width;
}