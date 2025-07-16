import { UiTheme } from "./enum"

export type UiSliceValue = {
    theme: UiTheme
}

export type reduxStore = {
    ui: UiSliceValue,
}