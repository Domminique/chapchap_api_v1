import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto ,MaterialIcons} from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import { RootStackParamList } from '../App'; Logistics

const ActionRow = ({_id, title, multiplier, name, screen,color,icon,vertical}) => {

  const navigation = useNavigation()
  return (
    <>

    {title ==='Logistics' ? (
      <TouchableOpacity 
    onPress={() => navigation.navigate('HomeContainer', { title }, title)}
    // onPress={()=>navigation.navigate(screen)}
    // onPress={navigation.navigate(screen)}
     className={`flex m-2 flex-1 justify-center items-center py-6 px-6
    rounded-lg space-x-2 ${vertical? "flex-col": "flex-row"}` }
    style={{backgroundColor:color}}>
      <Fontisto name={icon} size={30} color="white" />
      <Text className="text-white text-2xl font-extrabold">{screen}</Text> 
    </TouchableOpacity>

    ):(
<TouchableOpacity 
    onPress={() => navigation.navigate('CategoryDetails', { title }, title)}
    // onPress={()=>navigation.navigate(screen)}
    // onPress={navigation.navigate(screen)}
     className={`flex m-2 flex-1 justify-center items-center py-6 px-6
    rounded-lg space-x-2 ${vertical? "flex-col": "flex-row"}` }
    style={{backgroundColor:color}}>
      <Fontisto name={icon} size={30} color="white" />
      <Text className="text-white text-2xl font-extrabold">{screen}</Text> 
    </TouchableOpacity>
    )}
   </> 
  )
}

export default ActionRow