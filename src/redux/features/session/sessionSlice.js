import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    init: false,
    isQue: false,
    inDis: false
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers:{
        setInitFalse: (state)=>{state.init = false},
        setInitTrue: (state) => {state.init = true},
        setIsQueFalse: (state) => {state.isQue = false},
        setIsQueTrue: (state) => {state.isQue = true},
        setInDisFalse: (state)=>{state.inDis = false},
        setInDisTrue: (state)=>{state.inDis = true},
    }
})


export const {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue, setInDisFalse, setInDisTrue} = sessionSlice.actions;

export default sessionSlice.reducer;