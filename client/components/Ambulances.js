// import { View, Text } from 'react-native'
// import { GOOGLE_MAPS_APIKEY } from '@env'
// import React, { useState, useEffect } from 'react'
// import tw from 'tailwind-react-native-classnames'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// const Ambulances = () => {
//   return (
//     <View className='pt-16 p-4'>
//       <Text>Ambulances</Text>

//       <GooglePlacesAutocomplete
//         placeholder='where from'
//         styles={{
//           container: {
//             flex: 0,
//           },
//           textInput: {
//             fontSize: 10,
//           },
//         }}
//         onPress={(data, details = null) => {
//           console.log(data)
//           console.log(details)
//         }}
//         fetchDetails={true}
//         enablePoweredByContainer={false}
//         query={{
//           // key: GOOGLE_MAPS_APIKEY,
//           key: 'AIzaSyD2UDf1a-TWXP_ZVjY6GRVofVd7NiMhJWY',
//           language: 'en',
//         }}
//         nearbyPlacesAPI='GooglePlacesSearch'
//         debounce={400}
//       />
//     </View>
//   )
// }

// export default Ambulances
import { View, Text } from 'react-native'
import React from 'react'

const Ambulances = () => {
  return (
    <View>
      <Text>Ambulances</Text>
    </View>
  )
}

export default Ambulances