import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit'
// import cartItems from '../../cartItems';


const url ='http://192.168.43.19:80/api/v1/jobs/all'

const initialState  = {
    locale:'',
    cartItems: [],
    amount:4, 
    total:0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', ()=>{
    return fetch(url)
    .then((resp)=>resp.json())
    .catch((err)=> console.log(err))
});


const translationSlice = createSlice({
    name:'translation',
    initialState, 
    reducers:{

        addItem:(state, action) =>{
            console.log(action.payload, "locale")
            const language = action.payload
            state.locale = language
            // state.locale = [...state.locale, action.payload]
            // console.log(state.locale, "locale")
         },
        clearCart:(state)=>{
            state.cartItems = [];
        }, 
        removeItem:(state, action) =>{
           const itemId = action.payload
           state.cartItems = state.cartItems.filter((item)=>
            item._id !== itemId)
        },
        increase :(state, {payload})=>{
            const CartItem = state.cartItems.find((item)=>item._id === payload._id)
            CartItem.inventory = CartItem.inventory +1
        },
        decrease :(state, {payload})=>{
            const CartItem = state.cartItems.find((item)=>item._id === payload._id)
            CartItem.inventory = CartItem.inventory -1
        },
        calculateTotals: (state) =>{
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
              amount += item.inventory
              total += item.inventory * item.stock
            });

            state.amount = amount
            state.total = total
        }

    },
    extraReducers:{
    [getCartItems.pending]:(state) =>{
          state.isLoading = true
      }, 
    [getCartItems.fulfilled]:(state, action) =>{
        //console.log("action here", action)
        state.isLoading = false
        state.cartItems = action.payload.jobs
    },
    [getCartItems.rejected]:(state) =>{
        state.isLoading = false
    },  
    }

})
 
//console.log(translationSlice);
 export const{ addItem, clearCart,removeItem, increase,calculateTotals , decrease } = translationSlice.actions;
export default translationSlice.reducer   