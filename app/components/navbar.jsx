import React from 'react'
import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';


const Navbar = () => {
  return (
    <View className="flex w-full flex-row items-center justify-between">
      <TouchableOpacity>
        <Text className="text-4xl flex">
          Branded
        </Text>
      </TouchableOpacity>
      <View className="flex">
      <Ionicons name="checkmark-circle" size={32} color="green" />
      </View>
    </View>
  )
}

export default Navbar
