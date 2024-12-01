import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import '../../global.css'

const RootLayout = () => {
  return (
    // <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#fff"}}>
    //   <Text style={{color:"red"}}>_layout</Text>
    // </View>
    <Stack>
        <Stack.Screen  name="index" options={{title: "Home",headerShown:false}}/>
        <Stack.Screen  name="about" options={{title: "About"}}/>
        <Stack.Screen  name="meditationSreen/[id]" options={{title: "Meditation" ,headerShown:false ,animation:"slide_from_bottom" ,animationDuration:200}}/>
      
        <Tabs/>
        <Tabs.Screen  name="About" options={{title: "Tabs" ,}}/>
        <Tabs/>
    </Stack>
  )
}

export default RootLayout