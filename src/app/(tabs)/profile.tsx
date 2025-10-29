import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView contentContainerClassName='pb-8'>
        <View className='items-center justify-center bg-teal-50 p-6'>
          <Image
            className='rounded-full'
            resizeMode='cover'
            style={{ height: 96, width: 96 }}
            source={require('../../../assets/joy.jpg')}
          />
          <Text className='text-xl font-bold mt-3'>Zarjij Hasan Joy</Text>
          <Text className='text-gray-600'>Meditation Enthusiast</Text>
        </View>

        <View className='px-6 pt-6 gap-4'>
          <Text className='text-2xl font-semibold'>Your Journey</Text>
          <View className='flex-row justify-between bg-teal-100 rounded-xl p-4'>
            <View className='items-center flex-1'>
              <Text className='text-3xl font-bold'>12</Text>
              <Text className='text-gray-600'>Streak (days)</Text>
            </View>
            <View className='items-center flex-1'>
              <Text className='text-3xl font-bold'>58</Text>
              <Text className='text-gray-600'>Sessions</Text>
            </View>
            <View className='items-center flex-1'>
              <Text className='text-3xl font-bold'>430</Text>
              <Text className='text-gray-600'>Minutes</Text>
            </View>
          </View>

          <Text className='text-2xl font-semibold mt-2'>Goals</Text>
          <View className='gap-3'>
            <View className='flex-row items-center justify-between bg-white border border-slate-200 rounded-xl p-4'>
              <Text className='text-base'>Daily 10 min</Text>
              <Text className='text-teal-600 font-semibold'>On Track</Text>
            </View>
            <View className='flex-row items-center justify-between bg-white border border-slate-200 rounded-xl p-4'>
              <Text className='text-base'>3 sessions/week</Text>
              <Text className='text-teal-600 font-semibold'>On Track</Text>
            </View>
          </View>

          <Text className='text-2xl font-semibold mt-2'>Settings</Text>
          <View className='gap-3'>
            <View className='bg-white border border-slate-200 rounded-xl p-4'>
              <Text className='text-base'>Notifications</Text>
            </View>
            <View className='bg-white border border-slate-200 rounded-xl p-4'>
              <Text className='text-base'>Reminder Time</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}