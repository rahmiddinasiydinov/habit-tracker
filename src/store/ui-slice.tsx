import { UiTheme } from "@/shared/types/enum";
import type { UiSliceValue } from "@/shared/types/ui";
import { createSlice } from "@reduxjs/toolkit";



const initialState: UiSliceValue = {
    theme: UiTheme.Light
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        updateUi(state, action) {
            state.theme = action.payload
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
