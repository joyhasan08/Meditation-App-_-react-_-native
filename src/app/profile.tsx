import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View className='flex-1'>
        <View className='gap-2 items-center bg-slate-400 justify-center p-4'>
            <Image height={500} width={100} resizeMode="contain" className="m-4" source={require("./../../assets/favicon.png")} />
            <Text className='text-xl font-bold'>Zarjij Hasan Joy</Text>
            <Text>Front-End Developer</Text>
            <Text>React Native Developer</Text>
        </View>

        <View className='p-4 space-y-4'>
            <Text className='text-2xl bg-teal-100 w-32 rounded-lg px-2 py-1 my-2   '>About Me</Text>
            <Text className='text-4xl font-semibold'>Zarjij Hasan Joy</Text>
            <Text className='text-2xl font-normal text-gray-500'>Front-End Developer</Text>
            <Text className='text-2xl font-normal text-gray-500'>React Native Developer</Text>
        </View>
      
    </View>
  );
}
