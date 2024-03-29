import { configureStore } from "@reduxjs/toolkit"

import openOrderSlice from "../features/openOrder/openOrderSlice"
import closeOrderSlice from "../features/closeOrder/closeOrderSlice"
import marketPriceSlice from "../features/marketPrice/marketPriceSlice"
import sessionSlice from "../features/session/sessionSlice"


const store = configureStore({
    reducer : {
       openOrder: openOrderSlice,
       closeOrder: closeOrderSlice,
       marketPrice: marketPriceSlice,
       session: sessionSlice
    }
})

export default store