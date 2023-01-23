import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        bitcoin: 0,
        ethereum: 0,
        binancecoin: 0,
        ripple: 0
}

const marketPriceSlice = createSlice({
    name: "marketPrice",
    initialState,
    reducers:{
        setBitcoin: (state, action) => {state.bitcoin = action.payload},
        setEthereum: (state, action) => {state.ethereum = action.payload},
        setBinancecoin: (state, action) => {state.binancecoin = action.payload},
        setRipple: (state, action) => {state.ripple = action.payload}
    }
})


export const {setBitcoin, setEthereum, setBinancecoin, setRipple } = marketPriceSlice.actions;

export default marketPriceSlice.reducer;