import { Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'


const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : "font-pregular"} text-xs `}>{name}</Text>
    </View>
  )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel:false,
      tabBarActiveTintColor: '#fdd339', 
      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )

          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Save",
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon={icons.bookmark}
                color={color}
                name="Save"
                focused={focused}
              />
            )

          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            )

          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown:false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
              icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )

          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

