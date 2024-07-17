//rnfes react native function component in style basically stylesheet wala component snippet

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Stack } from "expo-router"


const RootLayout = () => {
  return (

      <Stack>
        <Stack.Screen name="index" options={{headerShown:  false}} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="page1" options={{ headerShown: false }} />
      </Stack>
  )
}

export default RootLayout