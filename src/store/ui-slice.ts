import { UiTheme } from "@/shared/types/enum";
import type { UiSliceValue } from "@/shared/types/ui";
import { createSlice } from "@reduxjs/toolkit";


const deviceInnerWidth = window.innerWidth;
const MIN_LARGE_DEVICE_LENGTH = 1024

const initialState: UiSliceValue = {
    theme: UiTheme.Light,
    isSidebarOpen: deviceInnerWidth > MIN_LARGE_DEVICE_LENGTH
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        updateUi(state, action) {
            state.theme = action.payload
        },
        openSideBar(state) {
            state.isSidebarOpen = true;
        },
        closeSideBar(state) {
            state.isSidebarOpen = false;
        },
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
