import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {Link} from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

const home = () => {

  return (

    <SafeAreaView className="flex-1 items-center bg-[#346DF6]  flex-col">
    <View className="flex w-full flex-row justify-end items-center" >
      <TouchableOpacity>
      <Link href="/profile" className='flex  items-baseline text-white text-bold text-lg mx-3 my-1'>
      <Ionicons name="play-skip-forward" size={28} color="white"/>
      </Link>
      </TouchableOpacity>
    </View>
    <View>
        <Text className="text-3xl mx-2 my-2 text-center text-white font-semibold leading-0">
          Welcome to{"\n"} Jaypee Camera
        </Text>
        <Text className="text-md text-center mb-2 text-white leading-5">
          Add Geotag to you photos ,{"\n"}
          with just "One Click" .
        </Text>
      </View>
      <Image source={require('../assets/images/page2.png')} className="w-full h-2/4 object-cover m-6"/>
      
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

export default home
