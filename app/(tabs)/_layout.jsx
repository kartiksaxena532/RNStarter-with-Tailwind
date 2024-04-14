import { Text, View } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'


const TabsLayout = () => {
  return (
   <>
   <Tabs>
    <Tabs.Screen
    name="home"
    />
   </Tabs>
   </>
  )
}

export default TabsLayout

