import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title , handlePress, containerStyle ,textStyles , isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-yellow-500 rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : '' }`}
    disabled={isLoading}
    
    >
      <Text className={`font-pbold text-lg text-primary ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton