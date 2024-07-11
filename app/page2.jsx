import React from 'react'
import { registerRootComponent } from 'expo';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Link } from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';

const page2 = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#346DF6]  flex-col">

      <View className="flex w-full flex-row justify-end items-center" >
      <TouchableOpacity>
      <Link href="/signIn" className='flex  items-baseline text-white text-bold text-lg mx-3 my-3'>
      <Ionicons name="play-skip-forward" size={28} color="white"/>
      </Link>
      </TouchableOpacity>
      </View>
      <View>
        <Text className="text-4xl text-center mt-10 mb-5 text-white font-semibold">
          Keep your budget {"\n"}on track with smart{"\n"} analytics
        </Text>
        <Text className="text-md text-center text-white leading-5">
          Get a clear view of your spendings,know{"\n"}
          exactly where your money is going.
        </Text>
      </View>
      <Image source={require('../assets/images/page3.png')} className=" h-80 w-80 my-6 " />
      <TouchableOpacity>
        <Link href="/signIn" className="text-blue-500 text-xl text-center font-bold bg-white py-3 mb-5 px-28 rounded-full">
          <Text >
            Sign In
          </Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/signup" className="text-white text-xl text-center font-bold bg-none border-white border-1 py-3 px-28 rounded-full">
          <Text >
            Sign Up
          </Text>
        </Link>
      </TouchableOpacity>

    </SafeAreaView>
  )
}
export default page2

