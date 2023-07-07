import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify';
//import { ToastAndroid } from 'react-native'
import Toast from 'react-native-root-toast'

import {
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  getUserLocationFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearStoreThunk,
  forgotPasswordThunk, 
  resetPasswordThunk, 
  verifyThunk,
  getAllUsersThunk,
  sendNotificationThunk
} from './userThunk'


const token = async () => await AsyncStorage.getItem('token')
const user = async () => await AsyncStorage.getItem('user')
const location = async () => await AsyncStorage.getItem('location')

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: null,
  token:token,
  location: location || '',
  users:null, 
  msg:null
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI)
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI)
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/users/updateUser', user, thunkAPI)
  }
)

export const clearStore = createAsyncThunk('/user/clearStore', clearStoreThunk)



// New features to support authflow

export const forgotPassword = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return forgotPasswordThunk('/auth/forgot-password', user, thunkAPI)
  }
)
export const resetPassword= createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return resetPasswordThunk('/auth/reset-password', user, thunkAPI)
  }
)
export const verify= createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return verifyThunk('/auth/verify-email', user, thunkAPI)
  }
)

export const sendNotification= createAsyncThunk(
  'user/sendNotification',
  async (user, thunkAPI) => {
    return sendNotificationThunk('/notifications/message', user, thunkAPI)
  }
)
// sendNotification({title, body})
export const getAllUsers = createAsyncThunk('users', getAllUsersThunk)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state, { payload }) => {
      state.user = null
      state.token = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
      if (payload) {
        Toast.show(`${payload}`, {
          duration: Toast.durations.LONG,
        })
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      Toast.show(`Hello There ${user.name}`, {
        duration: Toast.durations.LONG,
      })
     
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      Toast.show(`Welcome Back ${user.name}`, {
        duration: Toast.durations.LONG,
      })
      
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
     
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      Toast.show(`Profile Updated!`, {
        duration: Toast.durations.LONG,
      })
     
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
      
    },
    [clearStore.rejected]: () => {
      Toast.show('There was an error..', {
        duration: Toast.durations.LONG,
      })
      
    },
    [getAllUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.users = payload.users
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.isLoading = false
      Toast.show(`${payload}`, {
        duration: Toast.durations.LONG,
      })
    },
  },
})

export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer
