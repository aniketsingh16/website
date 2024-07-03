import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSearchBoxShow: false,
        isDrawerShow: false,
    },
    reducers: {
        toggleSearchBox: (state) => {
        },
        toggleSearchBoxSuccess: (state, action) => {
            state.isSearchBoxShow = action.payload;
        },
        toggleDrawer: (state) => {
        },
        toggleDrawerSuccess: (state, action) => {
            state.isDrawerShow = action.payload;
        }
    }
});

export const { toggleSearchBox, toggleDrawer, toggleSearchBoxSuccess, toggleDrawerSuccess } = appSlice.actions;
export default appSlice.reducer;