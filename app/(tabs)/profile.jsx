import * as MediaLibrary from 'expo-media-library';
import { CameraView, Camera,useCameraPermissions } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as FileSystem from 'expo-file-system';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Canvas, useCanvasRef, Image as SkiaImage,useImage, Text as SkiaText, Skia } from '@shopify/react-native-skia';
import * as Location from 'expo-location';

 function Profile() {
  // ...rest of the code remains same
  const [facing, setFacing] = useState('back');
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);
  const [mode, setMode] = useState('picture');
  const [photoUri, setPhotoUri] = useState('');
  const imageRef = useRef();
  const canvasRef = useCanvasRef();

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
      }
    }
  };

  const savePhotoWithText = async (uri, text) => {
    // Load the image
    const image = Skia.Image.MakeImageFromEncoded(await fetch(uri).then(res => res.arrayBuffer()));
    // Create a new canvas and draw the image and text
    const canvas = Skia.Surface.MakeOffscreen(image.width(), image.height());
    const paint = Skia.Paint();

    canvas.getCanvas().drawImage(image, 0, 0, paint);
    paint.setTextSize(40);
    paint.setColor(Skia.Color('black'));

    if (location) {
      const locationText = `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`;
      canvas.getCanvas().drawText(locationText, 50, 100, paint);
    }

    // Get the new image with text
    const newImage = canvas.makeImageSnapshot();
    const data = newImage.encodeToBytes(Skia.ImageFormat.JPEG, 100);

    // Save the image to the gallery
    const blob = new Blob([data], { type: 'image/jpeg' });
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    const asset = await MediaLibrary.createAssetAsync(URL.createObjectURL(file));
    return asset;
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


  return (
    
    <SafeAreaView  className="flex-1 items-center  justify-center flex-col">
      {photoUri ? (
        <View style={{ flex: 1 }}>
          <Canvas ref={canvasRef} style={{ flex: 1 }}>
            <SkiaImage image={photoUri} x={0} y={0} width={300} height={400} />
            {location && (
              <SkiaText x={50} y={100} text={`Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`} color="black" fontSize={40} />
            )}
          </Canvas>
          <TouchableOpacity style={styles.saveButton} onPress={() => savePhotoWithText(photoUri)}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View> ) : (
            <View>
      <CameraView className="flex-1 w-screen" facing={facing}  ref={(ref) => setCamera(ref)} >
      <Canvas style={{ width:"100", height:"100" }}>
    </Canvas>
      </CameraView>
      <View className="flex w-full flex-row justify-between mb-10" >
      <TouchableOpacity
            onPress={() => {
              setMode((prevMode) => (prevMode === 'picture' ? 'video' : 'picture'));
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'black' }}>
              {mode === 'picture' ? <MaterialIcons name="switch-video" size={40} color="black" /> : <MaterialIcons name="switch-camera" size={40} color="black" />}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
        onPress={handleCapture}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>{mode === 'picture' ?  <Ionicons name="camera" size={40} color="black" />: <Entypo name="video-camera" size={40} color="black" />}</Text>
        <Text style={{ fontSize: 18, color: 'red' ,textAlign:"center" ,}}>{mode === 'picture' ?  "Capture": "Record"}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={toggleCameraFacing}>
      <Ionicons name="camera-reverse-sharp" size={40} color="black" />
      </TouchableOpacity>
      </View>
      </View>
      )}

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureButton: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  captureText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  saveButton: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'blue',
    marginTop: 20,
  },
  saveText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Profile;