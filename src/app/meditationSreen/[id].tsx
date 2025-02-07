import { View, Text, SafeAreaView,Image, ImageBackground } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { meditation } from './../../data';

export default function details() {
  const {id} = useLocalSearchParams<{id:string}>()

  // for data fetch
  const mediData = meditation.find((item) => item.id == Number(id))
  return (
    // <SafeAreaView className='flex-1  '>
      <View className='flex-1   '>
      <ImageBackground
          resizeMode="cover"
          style={{ height: 500, width: 500,}}
          source={require("./../../../assets/90114.jpg")} />
      
      <View className='p-4 space-y-4'>
      <Text className='text-2xl bg-teal-100 w-24 rounded-lg px-2 py-1 my-2   '>Page {id}</Text>
      <Text className='text-4xl font-semibold'>{mediData?.title}</Text>
      <Text className='text-2xl font-normal text-gray-500'>{mediData?.description}</Text>
      </View>

      
      
        {/* <Image
          resizeMode="center"
          style={{ height: 500, width: 500,}}
          source={require("./../../../assets/90114.jpg")} /> */}
      
      

      <View className='flex-row items-center justify-between  py-4 px-1  '>
      {/* <AntDesign name="clockcircleo" size={16} color="black" /> */}
      <Text className='text-2xl text-red-600 -600 font-bold items-center flex-row'> 🕐 {mediData?.duration}</Text>
      <Text className='text-2xl text-teal-600 font-bold items-center flex-row'> 🎞 {mediData?.type}</Text>
      </View>

     
      
    </View>
    // </SafeAreaView>
  )
}