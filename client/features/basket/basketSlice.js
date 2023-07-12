import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage'
import Toast from 'react-native-root-toast'

import { createOrderThunk, getAllOrdersThunk } from './basketThunk'

const initialState = {
  items: [],
}

export const createOrder = createAsyncThunk(
  'basket/createOrder',
  createOrderThunk
)
export const getAllOrders = createAsyncThunk(
  'basket/getAllOrders',
  getAllOrdersThunk
)

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
    },
    addToBasket: (state, action) => {
      // console.log(action.payload, "add to basket action")
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id : ${action.payload.id}) as it's not in the basket!`
        )
      }
      state.items = newBasket
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.isLoading = true
    },
    [createOrder.fulfilled]: (state) => {
      state.isLoading = false
      // console.log('payload', payload)
      Toast.show('Order Created', {
        duration: Toast.durations.LONG,
      })

      // toast.success('Job Created');
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.isLoading = false
      // toast.error(payload);
    },
  },
})

export const { addToBasket, removeFromBasket, clearCart } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id)

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += parseInt(item.price)), 0)

export default basketSlice.reducer
