import { View, Text,Button } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
const Profile = () => {
  
  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/home" style={{color:"blue"}}>
        Go to Home
      </Link>
    </View>
  )
}

export default Profile