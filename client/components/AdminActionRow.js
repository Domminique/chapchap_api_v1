import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';




const ActionRow = ({title,screen,color,icon,vertical}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate(screen)}
    // onPress={navigation.navigate(screen)}
     className={`flex m-2 flex-1 justify-center items-center py-6
    rounded-lg space-x-2 ${vertical? "flex-col": "flex-row"}` }
    style={{backgroundColor:color}}>
      <Ionicons name={icon} size={30} color="white" />
      <Text>{title}</Text> 
    </TouchableOpacity>
  )
}

export default ActionRow