import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    long: true,
    price: 0.08808,
    min: 0,
    max: 200,
    lim0: 0,
    lim1: 0
}

const closeOrderSlice = createSlice({
    name: "closeOrder",
    initialState,
    reducers:{
        setLong: (state) => {state.long = true},
        setShort: (state) => {state.long = false},
        setClosePrice: (state, action) => {state.price = action.payload},
        setMin: (state, action) => {state.min = action.payload},
        setMax: (state, action) => {state.min = action.payload},
        setLim0: (state, action) => {state.lim0 = action.payload},
        setLim1: (state, action) => {state.lim1 = action. payload},

        setDefaultClose: (state) => {state = initialState}

    }
})


export const {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} = closeOrderSlice.actions;

export default closeOrderSlice.reducer;