import { View, Text } from 'react-native'
import React, { useEffect,useState, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector,useDispatch } from 'react-redux'
import {selectDestination,selectOrigin } from '../features/nav/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { setOrigin,setDestination, setTravelTimeInformation } from '../features/nav/navSlice'

const Maps = () => {
  const dispatch = useDispatch()
    //const { origin, destination,travelTimeInformation } = useSelector((store) => store.nav);
    const { user } = useSelector((store) => store.user)
   
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const GOOGLE_MAPS_APIKEY ='AIzaSyAzEyoWn-5M69xQpZDRE5Bp4VEizHyydfA'
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
      getLocalUser();
    }, []);
  
  
  
    const getLocalUser = async () => {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      // return JSON.parse(data);
      setUserInfo(JSON.parse(data));

    };
   
  
    console.log(userInfo)

    useEffect(()=>{
      if(!origin || !destination) return;

      //Zoom and fit to markers 
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
        edgePadding:{ top:50, right:50, bottom:50, left:50}
      })

      //  //Zoom and fit to markers 
      //  mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
      //   edgePadding:{ top:50, right:50, bottom:50, left:50}
      // })

    }, [origin, destination])


    useEffect(()=>{
      if(!origin || !destination) return; 
      const getTravelTime = async() =>{
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
        units=imperial&origins=${origin.description}&destinations=
        ${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
        ).then((res) => res.json())
         .then((data) =>{
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
         });

      }
      getTravelTime();
    }, [origin,destination, GOOGLE_MAPS_APIKEY])
     
    // console.log(user?.location?.coords, "user  origin")
    //latitude: user?.location?.coords.latitude || origin.location.lat,
    //longitude: user?.location?.coords.longitude || origin.location.lng,
    
    console.log(origin, "user origin")
  return (
    
     <MapView
        ref={mapRef}
        initialRegion={{
          latitude: userInfo?.location?.coords.latitude,
          longitude:userInfo?.location?.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >

{/* <MapViewDirections
origin={user?.location?.coords}
destination={destination?.description}
apikey='AIzaSyAzEyoWn-5M69xQpZDRE5Bp4VEizHyydfA'
strokeWidth={3}
strokeColor="green" 
/> */}


{origin && destination && (
  <MapViewDirections
  origin={origin.description}
  destination={destination?.description}
  apikey='AIzaSyAzEyoWn-5M69xQpZDRE5Bp4VEizHyydfA'
  strokeWidth={3}
  strokeColor="green" 
  
  
  />
)}
      {!origin?.location ? (
  
        < Marker  
      coordinate={{
        latitude: userInfo?.location?.coords.latitude,
        longitude:userInfo?.location?.coords.longitude,
      }}
      title='Home fragrance'
      description='Eating and driving fancy cars'
      identifier='origin'
      pinColor='#00aa13'
      />
      
        
      ):(

 < Marker  
      coordinate={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
      }}
      title='Home fragrance'
      description='Eating and driving fancy cars'
      identifier='origin'
      pinColor='#00aa13'
      />
        
      )}
       {destination && origin && (
      < Marker  
      coordinate={{
        latitude: destination?.location.lat,
        longitude: destination?.location.lng,
      }}
      title='Home'
      description={destination?.description}
      identifier='destination'
      pinColor='#00aa13'
      />
        
      )}
 
      </MapView>
 
  )
}

export default Maps