import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist: [],
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            let findProduct = state.wishlist.find((item) => item._id == action.payload._id)
            if (!findProduct) {
                state.wishlist.push({ ...action.payload})
            } 
        },
        removeWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item._id != action.payload._id)
        },
    }

})


export const { addWishlist, removeWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer