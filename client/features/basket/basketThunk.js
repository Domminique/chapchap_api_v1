import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
//import { clearValues } from './jobSlice'

export const createOrderThunk = async (basket, thunkAPI) => {
  try {
    const resp = await customFetch.post('/orders', basket)
    thunkAPI.dispatch(clearValues())
    return resp.data.msg
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
export const getAllOrdersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().basket

  let url = `/orders/showAllMyOrders?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
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
