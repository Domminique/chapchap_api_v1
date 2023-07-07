import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'
import navReducer from './features/nav/navSlice'
import jobSlice from './features/job/jobSlice'
import userSlice from './features/user/userSlice'
import allJobsSlice from './features/allJobs/allJobsSlice'
import basketSlice from './features/basket/basketSlice'
import shopSlice from './features/shop/shopSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import orderSlice from './features/orders/orderSlice'
//import storage from 'redux-persist/lib/storage'
import translationSlice from './features/translation/translationSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  //storage,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, basketSlice)
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    cart: cartReducer,
    modal: modalReducer,
    nav: navReducer,
    basket: persistedReducer,
    shop: shopSlice,
    translation:translationSlice,
    orders:orderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
// export const store = configureStore({
//     reducer: {
//         user: persistedReducer,
//         job: persistedReducer,
//         allJobs: persistedReducer,
//         cart: cartReducer,
//         modal: modalReducer,
//         nav:navReducer,
//         basket:persistedReducer,
//         shop:persistedReducer
//     },
// });

//  middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),

// const url ='http://localhost:5000/api/v1/products'
