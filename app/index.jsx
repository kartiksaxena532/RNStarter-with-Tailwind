import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {Link} from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const index = () => {

  return (
    <SafeAreaView className="flex-1 items-center bg-[#000000] flex-col">
     <WebView
      style={styles.container}
      source={{ uri: 'https://cubik-in.vercel.app' }}
    />
      <TouchableOpacity>
      <Link href="/page1" className="text-orange-500 text-xl text-center font-bold bg-white ring-2 ring-orange-300 py-3 my-5 px-28 rounded-full" >
        <Text >
          Continue
        </Text>
        </Link>
      </TouchableOpacity>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:410,
    
  },
});

export default index
