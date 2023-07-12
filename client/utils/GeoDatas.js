import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { distance } from './geodata'

import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { useDispatch, useSelector } from 'react-redux'

const GeoData = () => {

  const {
    jobs,
    products,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)

  // useEffect(() => {
  //   useDispatch(getAllJobs())
  // }, [page,products, search, searchStatus, searchType, sort])

var datas = [{
    "code": "0001",
    "lat": "1.28210155945393",
    "lng": "103.81722480263163",
    "location": "Stop 1"
}, {
    "code": "0003",
    "lat": "1.2777380589964",
    "lng": "103.83749709165197",
    "location": "Stop 2"
}, {
    "code": "0002",
    "lat": "1.27832046633393",
    "lng": "103.83762574759974",
    "location": "Stop 3"
},
{
  "code": "0004",
  "lat": "-1.3964161387444496",
  "lng": "36.74296376960316",
  "location": "Stop 4"
},
{
  "code": "0005",
  "lat": "-1.3964161387444496",
  "lng": "38.74296376960316",
  "location": "Stop 5"
}

];
// console.log("products Geodata",products)

var html = "";
const nearBy = {};
// var poslat = 1.28210155945393;
// var poslng = 103.81722480263163;
setTimeout(() => { 

}, 3000)
 const poslat = -1.3964161387444496;
 const  poslng = 36.74296376960316;
 const data  = products || {}

for (var i = 0; i < data.length; i++) {
  // if this location is within 0.1KM of the user, add it to the list
  if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 5.0) {
      html += data[i].name + ' - ' + data[i].category ;
      Array.prototype.push.call(nearBy ,{
        name:data[i].name , 
        category:data[i].category,
        _id:data[i]._id,
        
      
      } );

  }
}

// console.log(html , "html")



// console.log( "nearby products", nearBy)
  return (
    <View>
      <Text>{html}</Text>
      <Text>{JSON.stringify(nearBy)  }</Text>
    </View>
  )
}

export default GeoData



//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2022            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::