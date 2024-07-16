import * as MediaLibrary from 'expo-media-library';
import { CameraView, Camera,useCameraPermissions } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

 function Profile() {

 
  // ...rest of the code remains same
  const [facing, setFacing] = useState('back');
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [mode, setMode] = useState('picture');
  const [photoUri, setPhotoUri] = useState('');
  const imageRef = useRef();
  const viewShotRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null || hasMediaLibraryPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleCapture = async () => {
    if (camera) {
      if (mode === 'picture') {
        const photo = await camera.takePictureAsync();
        const localUri = `${FileSystem.documentDirectory}photo_${Date.now()}.jpg`;

        await FileSystem.moveAsync({
          from: photo.uri,
          to: localUri,
        });

        setPhotoUri(localUri);
        console.log('Photo saved to:', localUri);

        if (hasMediaLibraryPermission) {
          await MediaLibrary.createAssetAsync(localUri);
        }

        // Draw text on the photo
        drawTextOnPhoto(localUri);
      } else {
        // Handle video recording logic here if needed
      }
    }
  };

  const drawTextOnPhoto = async (uri) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = uri;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText('Your Text Here', 50, 50);

      viewShotRef.current.capture().then(uri => {
        savePhotoWithText(uri);
      });
    };
  };

  const savePhotoWithText = async (uri) => {
    const localUri = `${FileSystem.documentDirectory}photo_with_text_${Date.now()}.jpg`;
    await FileSystem.moveAsync({
      from: uri,
      to: localUri,
    });

    setPhotoUri(localUri);
    console.log('Photo with text saved to:', localUri);

    if (hasMediaLibraryPermission) {
      await MediaLibrary.createAssetAsync(localUri);
    }
  };


  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  const width = 256;
  const height = 256;
  const r = width * 0.33;

    

  return (
    
    <SafeAreaView  className="flex-1 items-center  justify-center flex-col">
      <View ref={imageRef} collapsable={false}>
      <CameraView className="flex-1 w-screen" facing={facing}  ref={(ref) => setCamera(ref)} >
      <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
      </CameraView>
      </View>
      <View className="flex w-full flex-row justify-between mb-20 " >
      <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setMode((prevMode) => (prevMode === 'picture' ? 'video' : 'picture'));
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>
              {mode === 'picture' ? 'Switch to Video' : 'Switch to Picture'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
        style={{ flex: 1, alignSelf: 'center' }}
        onPress={handleCapture}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>{mode === 'picture' ? 'Take Picture' : 'Record Video'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="my-3 mx-4" >
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