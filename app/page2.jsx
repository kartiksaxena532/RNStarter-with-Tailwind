import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
const page2 = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>page2</Text>
      <Link href="/signup" style={{color:"blue"}}>
        Go to Signup
      </Link>
    </View>
  )
}

export default page2

const styles = StyleSheet.create({})