import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    amount: 100,
    leverage: 1,
    price: 1337,
    fee: 0
}

const openOrderSlice = createSlice({
    name: "openOrder",
    initialState,
    reducers:{
        setAmount: (state, action) => {state.amount = action.payload},
        setLeverage: (state, action) => {state.leverage = action.payload},
        setOpenPrice: (state, action) => {state.price = action.payload},
        setFee: (state, action) => {state.fee = action.payload},

        setDefaultOpen: (state) => {state = initialState}
    }
})


export const {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} = openOrderSlice.actions;

export default openOrderSlice.reducer;