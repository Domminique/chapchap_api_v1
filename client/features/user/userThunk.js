import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { clearAllJobsState } from '../allJobs/allJobsSlice'
import { clearValues } from '../job/jobSlice'
import { logoutUser } from './userSlice'
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}

//  New Thunks to handles authflow
export const forgotPasswordThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const resetPasswordThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}



export const verifyThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const getUsersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs

  let url = `/products?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
  if (search) {
    url = url + `&search=${search}`
  }
  try {
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
// export const getCartItems = createAsyncThunk('cart/getCartItems', ()=>{
//   return fetch(url)
//   .then((resp)=>resp.json())
//   .catch((err)=> console.log(err))
// });

export const getAllUsersThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}


export const sendNotificationThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(title, body)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}