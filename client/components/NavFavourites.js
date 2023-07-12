import { FlatList, StyleSheet, Text, Image, View,TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements/dist/icons/Icon'
//import tw from 'twrnc'
import tw from 'tailwind-react-native-classnames'
import CartItems from '../cartItems'
import {useDispatch,  useSelector } from 'react-redux'
import  {clearCart, removeItem, increase,calculateTotals , decrease, getCartItems } from '../features/cart/cartSlice'
import { useNavigation } from '@react-navigation/native'
import { getAllJobs } from '../features/allJobs/allJobsSlice';

const data = [
  {
    id: '123', 
    icon: 'home',
    location: 'Health Insurance',
    destination: 'Get a private health insurance',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Vaccination',
    destination: 'Find nearest Covid vaccine center',
  },
  {
    id: '459',
    icon: 'person',
    location: 'Donate Blood',
    destination: 'Find nearest blood donation Center',
  },
]

const NavFavourites = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (jobs.length === 0) {
    return (
      <View>
        <Text>No logistic service proviers to display...</Text>
      </View>
    );
  }
 const navigation =useNavigation();
  //const dispatch = useDispatch();
  //const { cartItems, total,isLoading, amount } = useSelector((store ) =>store.cart)
 console.log('CartItems', cartItems)

 useEffect(()=>{
  dispatch(calculateTotals());
},[cartItems]);


useEffect(()=>{
  dispatch(getCartItems()) 
},[])

if(isLoading){
 return  <Text 
 style={tw`mt-2 text-lg font-semibold 
  pl-4 pt-8`}>Loading ...</Text>
}


  return (
    <>
    
     {amount >1 ? ( 
     
     <>
       <Text style={tw`text-center py-5 text-xl`}>Your Bag</Text>
     <FlatList
      data={jobs}
      keyExtractor={(item) => item._id}
      // ItemSeparatorComponent={() => <View style={tw`bg-gray-200  h-1`} />}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />
      )}
      renderItem={({ item: {_id , position, name, company, description,inventory,  location,title, price, amount, image,  destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          {/* <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name='home'
            type='ionicon'
            color='white'
            size={24}
          /> */}
          <Image
                style={{
                  width: 120,
                  borderRadius: 15,
                  height: 120,
                  resizeMode: 'contain',
                }}
                source={{ uri:image }}
              />
          <View style={tw`flex-1 `} >
            <Text style={tw`font-semibold text-lg`}>{company}</Text>
            <Text style={tw`text-gray-500`}>{price}</Text>
          
            <TouchableOpacity 
            onPress={()=>dispatch(removeItem(_id))}
            style={tw`bg-gray-100  rounded-full p-2 `}>
            <Text style={tw`text-center text-black `} > Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>dispatch(increase({_id}))}
            style={tw`bg-gray-100  rounded-full p-2 `}>
            <Text style={tw`text-center text-black `} > Add</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>{
              if(inventory ===1){
                dispatch(removeItem(_id))
                return;
              }
              dispatch(decrease({_id}))
            }
             
            }
            style={tw`bg-gray-100  rounded-full p-2 `}>
            <Text style={tw`text-center text-black `} > Minus</Text>
          </TouchableOpacity>
          </View>
          
        
            <Text style={tw`text-gray-500`}>{inventory}</Text>
        </TouchableOpacity>
        
      )}
    />

<View style={tw`mt-auto border-t border-gray-200 `}>
          <TouchableOpacity style={tw`bg-black py-3 m-3 rounded-full `}>
            <Text style={tw`text-center text-white  text-xl`} > Ksh {total.toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-auto border-t border-gray-200 `}>
          <TouchableOpacity 
          onPress={()=> {
            navigation.navigate('Modal')
            // dispatch(clearCart())
          }
          } 
            style={tw`bg-gray-100 py-3 m-3 rounded-full `}>
            <Text style={tw`text-center text-black   text-xl`} > Clear Cart</Text>
          </TouchableOpacity>
        </View>
    </>
    ):(
    <Text style={tw`text-center py-5 text-xl`}>Your cart is currently Empty</Text>)}
    
    </>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})
