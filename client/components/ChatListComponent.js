// import { View, Text, FlatList } from 'react-native'
// import React, {useEffect} from 'react'
// //import { useUserContext } from '../context/user_context'
// //import { useProductsContext } from '../context/products_context'
// import tw from 'tailwind-react-native-classnames'
// import ChatRow from './ChatRow'


// const ChatListComponent = () => { 
//     const {
//         bookings,
//         getJobs,
//         getAllBookings,
//         jobs,
//         isLoading,
//         totalBookings,
//         page,
//         totalJobs,
//         search,
//         searchStatus,
//         searchType,
//         sort,
//         numOfPages,
//       } = useProductsContext()
//        const { user } = useUserContext()
      
//       useEffect(() => {
//         getAllBookings()
      
//       }, [])
    
//       if (isLoading) {
//         return  <Text>Loading...</Text>
//       }
    
//       if (bookings.length === 0) {
//         return (
        
//             <Text>No bookings to display...</Text>
         
//         )
//       }


//       const myArray = [{id: 1, name:'pipi'}, {id: 2, name:'popo'},{id: 2, name:'popo'},{id: 4, name:'popo'}];  //bookings
// const id = '62ef513c0732ff499b7cc903'; //user id

// const patientId  = user._id


// const myNewArray = bookings.filter(array => array.patientId == "62ef513c0732ff499b7cc903")
// // const name = 'popo'


// // //0: {id: 1, name: 'pipi'}
// //const ourBookings = bookings.filter(booking => booking.serviceProviderId=== serviceProviderId);

// const ourBookings = bookings.filter(booking => booking.serviceProviderID === patientId);
// //const ourBookings = bookings.filter(booking => booking.user._id === user._id);

// //const myBookings = bookings.filter(serviceProviderId =>currentUserId == serviceProviderId )
// console.log("our bookings", user._id, bookings);
 
// //console.log("bookings ina container", myBookings,bookings )
    
//   return (
//     ourBookings.length > 0 ? (
//         <FlatList 
//         style={tw`h-full`}
//         data ={ourBookings}
//         keyExtractor={(item) => item._id}
//         renderItem ={({item}) => <ChatRow bookingDetails={item}/>}
//         /> 
//     ) :(
//         <View style={tw`p-5`}>
//             <Text> No  health service provider to chat with at the moment   😥</Text>

//         </View>
//     )
  
//   )
// }

// export default ChatListComponent


import { View, Text } from 'react-native'
import React from 'react'

const ChatListComponent = () => {
  return (
    <View>
      <Text>ChatListComponent</Text>
    </View>
  )
}

export default ChatListComponent