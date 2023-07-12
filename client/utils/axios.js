import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage'

const customFetch = axios.create({
// baseURL: 'https://savannaspace.co.ke/api/v1',
  //baseURL: 'https://ongatarongaionline.co.ke/api/v1'
  //  baseURL: 'http://192.168.42.152:80/api/v1',
  baseURL: 'http://34.170.204.224:80/api/v1',
})

customFetch.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    const user = await AsyncStorage.getItem('user')
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
