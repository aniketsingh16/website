import { createSlice } from "@reduxjs/toolkit";

export const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        wishlistItems: [],
        cartItems: [],
    },
    reducers: {
        setWishlistItems: (state) => {
        },
        setWishlistItemsSuccess: (state, action) => {
            state.wishlistItems = action.payload;
        },
        setCartItems: (state) => {
        },
        setCartItemsSuccess: (state, action) => {
            state.cartItems = action.payload;
        }
    }
});

export const { setWishlistItems, setWishlistItemsSuccess, setCartItems, setCartItemsSuccess } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;