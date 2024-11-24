import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { meditation } from './../../data';

export default function details() {
  const {id} = useLocalSearchParams<{id:string}>()

  // for data fetch
  const mediData = meditation.find((item) => item.id == Number(id))
  return (
    <View>
      <Text> details page {id}</Text>
      <Text> details page {mediData?.title}</Text>
      <Text> details page {mediData?.description}</Text>
      <Text> details page {mediData?.duration}</Text>
      <Text> details page {mediData?.type}</Text>
      <View>

      </View>
    </View>
  )
}