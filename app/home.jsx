import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {Link} from "expo-router"
import { Button, StyleSheet, Text, View } from 'react-native'
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {

    const width = useSharedValue(100);

    const handlePress = () => {
      width.value = withSpring(width.value + 50);
    };

  return (
    
    <SafeAreaView className="flex-1 items-center justify-center flex-row">
    <Navbar/>
    <View >
        <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
          marginBottom:10,
        }}
      />
      <Button onPress={handlePress} title="Click me" />
      <Link href="/home" style={{color:"blue"}}>
        Go to Signup
      </Link>
      <Link href="/signIn">
      Goback
      </Link>
    </View>
    <Footer/>
    </SafeAreaView>
    
  )
}

export default home
