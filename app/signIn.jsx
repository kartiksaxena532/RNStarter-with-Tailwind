import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
const signIn = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>signIn</Text>
      <Link href="/profile" style={{color:"blue"}}>
        Go to profile
      </Link>
    </View>
  )
}

export default signIn

const styles = StyleSheet.create({})