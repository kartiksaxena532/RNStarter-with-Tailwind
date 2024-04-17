import { StatusBar } from 'expo-status-bar';
import { Text, View ,ScrollView ,Image} from "react-native"
import { SafeAreaView} from 'react-native-safe-area-context';
import {images} from "../constants"
import CustomButton from '../components/CustomButton';
import { Redirect,router } from 'expo-router';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
     <ScrollView contentContainerStyle={{height :'100%'}} >
<View className="w-full jutify-center items-center min-h-[85vh] px-4">
<Image source={images.logo} className="w-[130px] h-[130px]" resizeMode='contain'/>
<View className="flex-row gap-3">
<Text className="text-3xl text-yellow-300 font-pbold">Deepak</Text>
<Text className="text-3xl text-blue-300 font-pbold">Opticals</Text>
</View>

<Image source={images.cards} className="w-[375px] h-[375px]" resizeMode='contain'/>

<View className="relative">
<Text className="text-2xl text-white font-pbold text-center">Welcome to <Text className=" text-yellow-300">Deepak</Text><Text className=" text-blue-300"> Opticals!</Text></Text>
<Text className="text-2xl text-white font-pbold text-center">Let's Get You A <Text className="text-yellow-300">New Look.</Text></Text>
<Image source={images.path} className="w-[120px] h-[20px] absolute -bottom-2.5 right-8" resizeMode='contain'/>

</View>
<View className="mt-5">
<Text className="text-sm text-slate-100 font-pregular text-center px-4">Where you can create cool custom eyewears for your friends and family using AI.</Text>
</View>
<CustomButton title="Continue with Email"
handlePress={()=>router.push('/sign-in')}
containerStyle="w-full mt-7"
/>

</View>



     </ScrollView>
     <StatusBar backgroundColor='#161622'  style="light"/>
    </SafeAreaView>
  );
}

