import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify';

import { getAllUsersThunk,showAllMyOrdersThunk, showAllOrdersThunk,showStatsThunk } from './orderThunk'

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const initialState = {
  isLoading: true,
  userOrders:[],
  orders: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
}

// export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk)


export const getAllOrders = createAsyncThunk('orders/getAllOrders', showAllOrdersThunk)

export const getMyOrders = createAsyncThunk('orders/getMyOrders', showAllMyOrdersThunk)

export const showStats = createAsyncThunk('orders/showStats', showStatsThunk)

export const getUsers = createAsyncThunk('users', getAllUsersThunk)





const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1
      state[name] = value
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState }
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: {
    [getAllOrders.pending]: (state) => {
      state.isLoading = true
    },
    [getAllOrders.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      console.log("Orders slice", payload)
      state.orders = payload
      // state.numOfPages = payload.numOfPages
      // state.totalJobs = payload.totalJobs
    },
    [getAllOrders.rejected]: (state, { payload }) => {
      state.isLoading = false
      // toast.error(payload);
    },



    // Get userOrders
    [getMyOrders.pending]: (state) => {
      state.isLoading = true
    },
    [getMyOrders.fulfilled]: (state, { payload }) => {
      console.log("Orders slice", payload)
      state.isLoading = false
      console.log("Orders slice", payload)
      state.userOrders = payload
      // state.numOfPages = payload.numOfPages
      // state.totalJobs = payload.totalJobs
    },
    [getMyOrders.rejected]: (state, { payload }) => {
      state.isLoading = false
      // toast.error(payload);
    },


    [showStats.pending]: (state) => {
      state.isLoading = true
    },
    [showStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.stats = payload.defaultStats
      state.monthlyApplications = payload.monthlyApplications
    },
    [showStats.rejected]: (state, { payload }) => {
      state.isLoading = false
      // toast.error(payload);
    },
    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.users = payload.users
      // state.monthlyApplications = payload.monthlyApplications
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false
      // toast.error(payload);
    },
  },
})

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = ordersSlice.actions

export default ordersSlice.reducer
