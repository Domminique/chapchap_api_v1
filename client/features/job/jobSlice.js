import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify';
import { getUserFromLocalStorage, getUserLocationFromLocalStorage } from '../../utils/localStorage'
import Toast from 'react-native-root-toast'

import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk'
const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: getUserLocationFromLocalStorage(),
  // jobTypeOptions: ['Service', 'Professional', 'Shop', 'Grocery', 'Rider'],
  jobTypeOptions: ['Professional', 'Doctor', 'Artisan','Ambulance','Logistics', 'Service','Shop','Grocery', 'Rider' ,'Gov','NGO'],
  
  jobType: 'Service',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',

  logisticsOptions:[
    'Motorcycle',
    'Bicycle',
    'Van',
    'Drone',
    'Truck',
    'Container',
    'Excavators',
    'Tractors',
    'Mkokoteni',
    'Helicopter'
  ], 
  logisticsType:'Truck',
  categoryOptions:[
   
    'Lamps',
    'Carpets',
    'Mirrors',
    'Plants and Planters',
    'Wall & Minimalist Art',
    'Frames',
    'Candles Diffusers',
    'Home Fragrance',
    'Kitchen Ware',
    'Baskets and Fabrics',
    'Motorcycle',
    'Bicycle',
    'Van',
    'Drone',
    'Truck',
    'Container',
    'Excavators',
    'Tractors',
    'Mkokoteni',
    'Helicopter'
   
  ],
  categoryServiceOptions: [
   
    'Lamps',
    'Carpets',
    'Mirrors',
    'Plants and Planters',
    'Wall & Minimalist Art',
    'Frames',
    'Candles Diffusers',
    'Home Fragrance',
    'Kitchen Ware',
    'Baskets and Fabrics',
  ],
  categoryDoctorOptions:[
    
    'Lamps',
    'Carpets',
    'Mirrors',
    'Plants and Planters',
    'Wall & Minimalist Art',
    'Frames',
    'Candles Diffusers',
    'Home Fragrance',
    'Kitchen Ware',
    'Baskets and Fabrics',
    
  ],
  categoryAmbulanceOptions: [],
  category: 'Plants and Planters',
  isEditing: false,
  editJobId: '',
}

export const createJob = createAsyncThunk('job/createJob', createJobThunk)

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk)

export const editJob = createAsyncThunk('job/editJob', editJobThunk)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation:  getUserLocationFromLocalStorage()?.location || '',
      }
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false
      // console.log('payload', payload)
      Toast.show('Hustle Created', {
        duration: Toast.durations.LONG,
      })

      // toast.success('Job Created');
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false
      Toast.show('Hustle Creation Failed', {
        duration: Toast.durations.LONG,
      })
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
     
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
    },
    [deleteJob.rejected]: (state, { payload }) => {
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
      
    },
    [editJob.pending]: (state) => {
      state.isLoading = true
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false
      Toast.show('Hustle Modified...', {
        duration: Toast.durations.LONG,
      })
     
    },
    [editJob.rejected]: (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })

     
    },
  },
})

export const { handleChange, clearValues, setEditJob } = jobSlice.actions

export default jobSlice.reducer
