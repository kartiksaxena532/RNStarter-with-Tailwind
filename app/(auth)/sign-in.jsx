import { Text, View , ScrollView ,Image,Alert} from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import {images} from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link ,router} from "expo-router"
import {signIn} from "../../lib/appwrite"


const SignIn = () => {
const [form,setFormValue]= useState({

  email:"",
  password:""
})



const [isSubmitting, setIsSubmitting] = useState(false)

const submit = async() => {

  if ( !form.email ||!form .password){
    Alert.alert("Error","Please fill all the fields")
  }
  setIsSubmitting(true);
  try{
    await signIn(form.email, form.password); 

    router.replace("/home")
  }
  catch(error){
    Alert.alert("Error",error.message)
  }
  finally{
    isSubmitting(false);
  }

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
<Text className="text-2xl text-white mt-7 capitalize font-psemibold">Login to your account</Text>
<FormField title="Email"
value={form.email}
handleChangeText={(e)=>setFormValue({...form,email:e})}
otherStyle="mt-7"
keyboardType="email-address"
/>

<FormField title="Password"
value={form.password}
handleChangeText={(e)=>setFormValue({...form,password:e})}
otherStyle="mt-7"
/>

<CustomButton  title="Sign In"
handlePress={submit}
containerStyle="w-full mt-7"
isLoading={isSubmitting}
/>

<View className="justify-center pt-5 flex-row gap-2 mt-3">
<Text className="text-lg text-white font-pregular">Want a new account?</Text>
<Link className="text-lg text-blue-500 font-psemibold"href="/sign-up" >SignUp</Link>
</View>


</View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
