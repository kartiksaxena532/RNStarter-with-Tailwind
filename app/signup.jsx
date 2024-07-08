import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
const signup = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>signup</Text>
      <Link href="/signIn" style={{color:"blue"}}>
        Go to SignIn
      </Link>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})