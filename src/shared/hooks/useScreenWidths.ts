import { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import type { UiStateValue } from '../types/ui'
import { getMainContentWidth, getSidebarWidth } from '@/shared/utils/width-services'
import { useSelector } from 'react-redux';

function useScreenWidths() {
    const isSidebarOpen = useSelector((state: UiStateValue) => state.ui.isSidebarOpen);
    const [mainContentWidth, setMainContentWidth] = useState(getMainContentWidth(isSidebarOpen));
    const [sidebarWidth, setSideBarWidth] = useState(getSidebarWidth());

    const handleResize = useCallback(() => {
        setMainContentWidth(getMainContentWidth(isSidebarOpen));
        setSideBarWidth(getSidebarWidth())
    }, [isSidebarOpen])

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    useEffect(() => {
        setMainContentWidth(getMainContentWidth(isSidebarOpen));
        setSideBarWidth(getSidebarWidth())
    }, [isSidebarOpen])

    return {
        mainContentWidth,
        sidebarWidth
    }
}


export default useScreenWidths
