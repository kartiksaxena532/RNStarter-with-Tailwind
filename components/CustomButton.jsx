import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity className="bg-yellow-500 px-4 py-4 rounded w-full items-center mt-6 ">
      <Text className="font-pbold text-lg">Get Started With Email</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
