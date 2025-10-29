import { View, Text, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { meditation } from './../../data';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const mediData = meditation.find((item) => item.id === Number(id))

  if (!mediData) {
    return (
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Text>Session not found.</Text>
      </SafeAreaView>
    )
  }

  return (
    // <SafeAreaView className='flex-1 bg-white'>
      
    // </SafeAreaView>
    <ScrollView className='flex-1' contentContainerClassName='pb-10'>
        <ImageBackground
          resizeMode='cover'
          className='w-full h-64'
          source={require('./../../../assets/90114.jpg')}
        >
          <View className='flex-1 bg-black/35 justify-end p-4'>
            <Text className='text-white text-3xl font-semibold'>{mediData.title}</Text>
            <Text className='text-white/90 mt-1'>“{mediData.quote}”</Text>
          </View>
        </ImageBackground>

        <View className='px-4 pt-4 gap-4'>
          <View className='flex-row gap-2'>
            <View className='flex-row items-center bg-teal-50 border border-teal-200 px-3 py-1 rounded-full'>
              <MaterialIcons name='schedule' size={16} color={'#0f766e'} />
              <Text className='text-teal-700 ml-1'>{mediData.duration} min</Text>
            </View>
            <View className='flex-row items-center bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full'>
              <MaterialIcons name={mediData.type === 'audio' ? 'graphic-eq' : 'movie'} size={16} color={'#0f766e'} />
              <Text className='text-teal-700 ml-1 capitalize'>{mediData.type}</Text>
            </View>
            {mediData.pro && (
              <View className='flex-row items-center bg-amber-100 border border-amber-300 px-3 py-1 rounded-full'>
                <MaterialIcons name='star' size={16} color={'#92400e'} />
                <Text className='text-amber-800 ml-1'>Pro</Text>
              </View>
            )}
          </View>

          <View className='gap-2'>
            <Text className='text-xl font-semibold'>About this session</Text>
            <Text className='text-slate-700'>{mediData.description}</Text>
          </View>

          <View className='gap-2'>
            <Text className='text-xl font-semibold'>Coming soon</Text>
            <View className='bg-slate-50 border border-slate-200 rounded-xl p-4 gap-2'>
              <View className='flex-row items-center gap-2'>
                <MaterialIcons name='play-circle-outline' size={20} color={'#475569'} />
                <Text className='text-slate-700'>Audio guidance</Text>
              </View>
              <View className='flex-row items-center gap-2'>
                <MaterialIcons name='ondemand-video' size={20} color={'#475569'} />
                <Text className='text-slate-700'>Video walkthrough</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
  )
}
