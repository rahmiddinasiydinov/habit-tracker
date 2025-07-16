import React from 'react'
import { useSelector } from 'react-redux';
import type {reduxStore} from '../types/ui';

type Props = {
    children: React.ReactNode
}

const THEMES = ['light', 'dark', 'red'];

const ThemeProvider = ({ children }: Props) => {
    const theme = useSelector((state:reduxStore) => state.ui.theme) || 0;
    

    return (<>
        <div data-theme={THEMES[theme]}>{children}</div>
    </>
    )
}

export default ThemeProvider