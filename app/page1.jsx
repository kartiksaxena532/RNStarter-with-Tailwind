import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
const page1 = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>page1</Text>
      <Link href="/page2" style={{color:"blue"}}>
        Go to Page2
      </Link>
    </View>
  )
}

export default page1

const styles = StyleSheet.create({})