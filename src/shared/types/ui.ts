import { UiTheme } from "./enum"

export type UiSliceValue = {
    theme: UiTheme, 
    isSidebarOpen: boolean
}

export type reduxStoreValue = {
    ui: UiSliceValue,
}