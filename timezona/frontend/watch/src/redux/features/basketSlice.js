import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload._id)
            if (!findProduct) {
                state.basket.push({ ...action.payload, count: 1 })
            } else {
                findProduct.count += 1
            }
        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item._id != action.payload._id)
        },
        pilusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload._id)
            if (findProduct) {
                findProduct.count += 1

            }
        },
        minusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id == action.payload._id)
            if (findProduct && findProduct.count > 1) {
                findProduct.count -= 1

            }
        }
    }

})


export const { addBasket, removeBasket ,pilusBtn, minusBtn} = basketSlice.actions 

export default basketSlice.reducer