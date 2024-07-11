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
    
    <View className="flex w-full flex-row justify-end items-center" >
   
      <TouchableOpacity>
      <Link href="/signIn" className='flex  items-baseline text-white text-bold text-lg mx-3 my-3'>
      <Ionicons name="play-skip-forward" size={28} color="white"/>
      </Link>
      </TouchableOpacity>
    </View>
    <View>
        <Text className="text-4xl text-center mt-10 mb-5 text-white font-semibold">
          Start saving{"\n"}the easy way
        </Text>
        <Text className="text-md text-center text-white leading-5">
          Set money aside without thinking about it-{"\n"}
          include your spare change and regular transfers.
          
        </Text>
      </View>
      <Image source={require('../assets/images/page1.png')} className="w-2/3 h-1/2 my-6"/>
      <TouchableOpacity>
        <Link href="/page2" className="text-blue-500 text-xl text-center font-bold bg-white py-3 px-28 rounded-full">
        <Text >
         Continue
        </Text>
        </Link>
      </TouchableOpacity>
      
      
    </SafeAreaView>
  )
}

export default page1

