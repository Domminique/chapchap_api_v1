import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'

export const showAllMyOrdersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().orders

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

export const showAllOrdersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().orders

  let url = `/orders?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
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
export const getAllUsersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().orders

  let url = `/users?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
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
export const getJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().orders

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

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/products/stats')

    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
