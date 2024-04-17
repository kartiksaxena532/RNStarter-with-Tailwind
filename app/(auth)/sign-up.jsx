import { Text, View , ScrollView ,Image} from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import {images} from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link } from "expo-router"

const SignUp = () => {
const [form,setFormValue]= useState({
  username:"",
  email:"",
  password:""
})

const [isSubmitting, setIsSubmitting] = useState(false)

const submit =() =>{

}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-3">
     
        <Image source={images.logo} className="flex w-[90px] h-[90px] align-top" resizeMode='contain'/>
        <View className="flex-row gap-3">
<Text className="text-3xl text-yellow-300 font-pbold">Deepak</Text>
<Text className="text-3xl text-blue-300 font-pbold">Opticals</Text>
</View>
<Text className="text-2xl text-white mt-7 capitalize font-psemibold">Create a new account</Text>
<FormField title="Username"
value={form.username}
handleChangeText={(e)=>setFormValue({...form,username:e})}
otherStyle="mt-7"
keyboardType=""
/>
<FormField title="Email"
value={form.email}
handleChangeText={(e)=>setFormValue({...form,email:e})}
otherStyle="mt-10"

/>

<FormField title="Password"
value={form.password}
handleChangeText={(e)=>setFormValue({...form,password:e})}
otherStyle="mt-7"
/>

<CustomButton  title="Sign Up"
handlePress={submit}
containerStyle="w-full mt-7"
isLoading={isSubmitting}
/>

<View className="justify-center pt-5 flex-row gap-2 mt-3">
<Text className="text-lg text-white font-pregular">Already a user?</Text>
<Link className="text-lg text-blue-500 font-psemibold"href="/sign-in" >SignIn</Link>
</View>


</View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
