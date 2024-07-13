import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState,useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/navbar';


 function Profile() {

 
  // ...rest of the code remains same
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [status, statusrequestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();
  if (status === null) {
    statusrequestPermission();
  }
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center ">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };


  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }





  return (
    
    <SafeAreaView  className="flex-1 items-center  justify-center flex-col">
      <View >
      <CameraView className="flex-1 w-screen" facing={facing} ref={imageRef} collapsable={false}>
        <Navbar />
      </CameraView>
      </View>
      <View className="flex w-full flex-row justify-between mb-20 " >
      <TouchableOpacity className="my-3 mx-4" onPress={toggleCameraFacing}>
      <Ionicons name="camera" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="my-3 mx-4" onPress={onSaveImageAsync}>
      <Ionicons name="camera" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="my-3 mx-4" onPress={toggleCameraFacing}>
      <Ionicons name="camera-reverse-sharp" size={40} color="black" />
      </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}



export default Profile;