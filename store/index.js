import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './sclies/CounterSclie'
import productReducer from './sclies/ProductSclies'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product:productReducer
  },
})
