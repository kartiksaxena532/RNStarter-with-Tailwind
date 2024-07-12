
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/navbar';


 function Profile() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center items-center ">
        <Text className="text-center text-md sm:text-xl mb-10 ">We need your permission to show the camera.</Text>
        <TouchableOpacity onPress={requestPermission} className="text-white text-xl text-center font-bold bg-blue-500 py-3 px-28 rounded-full">
        <Text className="text-white" >
          Continue
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <SafeAreaView  className="flex-1 w-full items-center justify-center flex-col">
      <CameraView className="flex-1" facing={facing}>
        <View className=" w-full justify-center items-center" >
        <TouchableOpacity className=" my-3 mx-4" onPress={toggleCameraFacing}>
      <Ionicons name="camera-reverse-sharp" size={40} color="white" />
      </TouchableOpacity>
    </View>
        <Navbar />
      </CameraView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({


});

export default Profile;