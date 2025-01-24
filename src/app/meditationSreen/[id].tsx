import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { meditation } from './../../data';

export default function details() {
  const {id} = useLocalSearchParams<{id:string}>()

  // for data fetch
  const mediData = meditation.find((item) => item.id == Number(id))
  return (
    <SafeAreaView className='flex-1 bg-sky-200 '>
      <View className='flex-1 p-4 bg-sky-200 '>
      <Text className='text-2xl bg-teal-100 w-24 rounded-lg px-2 py-1 my-2   '>Page {id}</Text>
      <Text className='text-4xl'>{mediData?.title}</Text>
      <Text className='text-2xl'> {mediData?.description}</Text>
      <View className='flex-row items-center justify-between '>
      <Text> details page {mediData?.duration}</Text>
      <Text> details page {mediData?.type}</Text>
      <Text> Hello World</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}