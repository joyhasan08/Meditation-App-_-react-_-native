import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import '../../global.css'

const RootLayout = () => {
  return (
    // <View style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center", backgroundColor:"#fff"}}>
    //   <Text style={{color:"red"}}>_layout</Text>
    // </View>
    <Stack>
        <Stack.Screen name="index" options={{title:"Home"}}/>
    </Stack>
  )
}

export default RootLayout