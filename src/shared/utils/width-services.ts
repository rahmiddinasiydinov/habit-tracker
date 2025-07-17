import { RESPONSIVE_DESIGN_CHANGE, SIDEBAR_WIDTH, SIDEBAR_WIDTH_MD, } from "./constants"

const getSidebarDeviceWidth = (windowWidth:number) => {
    const sidebarWidth = windowWidth > RESPONSIVE_DESIGN_CHANGE ? SIDEBAR_WIDTH_MD : SIDEBAR_WIDTH;
    return sidebarWidth;
}

export const getSidebarWidth = () => {
    const windowWidth = window.innerWidth
    return getSidebarDeviceWidth(windowWidth) + 'px';
}

export const getMainContentWidth = (isSideBarOpen:boolean,) => {
    const windowWidth = window.innerWidth
    let width = '100%'
    
    if(isSideBarOpen){
        width = (windowWidth - getSidebarDeviceWidth(windowWidth)) + 'px';
    }
    
    return width;
}