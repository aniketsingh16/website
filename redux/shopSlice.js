import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        isGridView: true,
        isFilter: false,
    },
    reducers: {
        changeShopGridView: (state) => {
        },
        changeShopGridViewSuccess: (state, action) => {
            state.isGridView = action.payload;
        },
        toggleShopFilter: (state) => {
        },
        toggleShopFilterSuccess: (state, action) => {
            state.isFilter = action.payload;
        }
    }
});

export const { changeShopGridView, changeShopGridViewSuccess, toggleShopFilter, toggleShopFilterSuccess } = shopSlice.actions;
export default shopSlice.reducer;