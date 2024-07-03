import { View, Text,Button } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
const Profile = () => {


  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  
  return (
    <View className="flex-1 items-center justify-center">
        <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
          marginBottom:10,
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    
    </View>
  )
}

export default Profile