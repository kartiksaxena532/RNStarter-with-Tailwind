import { View, Text ,TextInput, TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'

import {icons} from "../constants"

const FormField = ({title ,handleChangeText ,value,placeholder,otherStyles,...props}) => {

    const [showPassword,setShowPassword]=useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium outline-dashed mt-4`}>{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-md border-2 border-blue-800 focus:border-secondary items-center flex-row">
<TextInput className="flex-1 text-white font-psemibold text-base"
value={value}
placeholder={placeholder}
placeholderTextColor={'#6B7280'}
onChangeText={handleChangeText}
secureTextEntry={title==="Password" && !showPassword}

/>

{title==='Password' && (
<TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
    <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain"/>
    </TouchableOpacity>

)}
      </View>
    </View>
  )
}

export default FormField