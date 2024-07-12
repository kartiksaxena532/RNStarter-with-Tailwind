
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
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <SafeAreaView  className="flex-1 items-center  ustify-center flex-col">
      <CameraView style={styles.camera} facing={facing}>
        <View >
        <View className=" w-full flex-row justify-end items-center" >
        <TouchableOpacity className=" my-3 mx-4" onPress={toggleCameraFacing}>
      <Ionicons name="camera-reverse-sharp" size={40} color="white" />
      </TouchableOpacity>
    </View>
        </View>
        <Navbar />
        <Text className=" flex items-center bg-transparent font-bold text-4xl">Kartik</Text>
      </CameraView>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },

});

export default Profile;