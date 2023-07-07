import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin :null,       //Where are you right now, current user location
    destination : null, 
    travelTimeInformation:null,         //Where are you right now
    isOpen :false,
    cardIndex :null,  //swiped card index
    information:null,  // description Information given to ambulance by patient
    userSwipes : [],
};

const navSlice = createSlice({
    name:'nav',
    initialState,  
    reducers:{
        setOrigin : (state, action) =>{
            state.origin = action.payload; 
         }, 
         setDestination : (state, action) =>{
            console.log(state, action, "state action")
            state.destination = action.payload; 
         }, 
        
       setTravelTimeInformation : (state, action) =>{
          state.travelTimeInformation = action.payload;; 
       }, 

       setCardIndex: (state, action) =>{
        state.cardIndex = action.payload; 
     }, 

     setInformation: (state, action) =>{
        state.information = action.payload; 
     }, 
     clearUserSwipes: (state) => {
      state.userSwipes = []
    },
    setUserSwipes: (state, action) => {
      // console.log(action.payload, "add to basket action")
      state.userSwipes = [...state.userSwipes, action.payload]
    },
    //    closeModal : (state, action) =>{ 
    //     state.isOpen = false;   
    // },   
    },

});

export const {setOrigin,setDestination,setUserSwipes,  clearUserSwipes,setTravelTimeInformation,setInformation, setCardIndex} = navSlice.actions;
 
// Selectors 

export const selectOrigin = (state) =>state.nav.origin;
export const selectDestination = (state) =>state.nav.destination;
export const selectTravelTimeInformation= (state) =>state.nav.travelTimeInformation;
export const selectCardIndex = (state) =>state.nav.cardIndex;
export const selectInformation = (state) =>state.nav.information;
export const selectUserSwipes = (state) =>state.nav.userSwipes;

export default navSlice.reducer