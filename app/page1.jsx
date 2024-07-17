import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {Link} from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';


const page1 = () => {

  return (
    <SafeAreaView className="flex-1 items-center bg-[#346DF6] flex-col">
    <View className="flex w-full flex-row justify-between items-center" >
    <TouchableOpacity>
      <Link href="/profile" className='flex  items-baseline text-white text-bold text-lg mx-3 my-1'>
      <Ionicons name="arrow-back" size={28} color="white"/>
      </Link>
      </TouchableOpacity>
      <TouchableOpacity>
      <Link href="/index" className='flex  items-baseline text-white text-bold text-lg mx-3 my-1'>
      <Ionicons name="play-skip-forward" size={28} color="white"/>
      </Link>
      </TouchableOpacity>
    
    </View>
    <View>
        <Text className="text-4xl text-center flex mb-3 text-white font-semibold">
          Welcome to{"\n"}Jaypee Camera
        </Text>
        <Text className="text-xl text-center text-white mb-2 leading-0">
        Single click geotagging and photo application
        </Text>
      </View>
      <Image source={require('../assets/images/page2.png')} className="w-full h-2/4 object-bottom mt-6 mb-2"/>
      
      <TouchableOpacity>
      <Link href="/profile" className="text-blue-500 text-xl text-center font-bold bg-white py-3 px-28 rounded-full" >
        <Text >
          Continue
        </Text>
        </Link>
      </TouchableOpacity>
     
    </SafeAreaView>
  )
}

export default page1
