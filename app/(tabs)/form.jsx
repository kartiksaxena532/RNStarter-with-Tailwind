import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {Link} from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const form = () => {

  return (
    <SafeAreaView className="flex-1 items-center bg-white flex-col" >
     <WebView
      style={styles.container}
      source={{ uri: 'https://forms.gle/kaxYnN7WuukLsnKN7' }}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:410,
    
  },
});

export default form
