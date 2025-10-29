import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function AboutScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView contentContainerClassName='p-6 gap-6'>
        <View className='items-center'>
          <Image
            resizeMode='contain'
            style={{ height: 90, width: 90 }}
            className='m-2'
            source={require('../../../assets/splash-icon.png')}
          />
          <Text className='text-3xl font-semibold mt-2'>Meditation App</Text>
          <Text className='text-slate-600 mt-1 text-center'>Your daily companion for calm, clarity, and focus.</Text>
        </View>

        <View className='bg-teal-50 rounded-2xl p-4'>
          <Text className='text-xl font-semibold mb-2'>Our Mission</Text>
          <Text className='text-slate-700'>We help you build a mindful habit through simple, guided sessions that fit into your day.</Text>
        </View>

        <View className='gap-3'>
          <Text className='text-xl font-semibold'>What you get</Text>
          <View className='flex-row items-start gap-2'>
            <MaterialIcons name='check-circle' size={20} color={'#0f766e'} />
            <Text className='text-slate-700 flex-1'>Curated audio and video practices for any schedule.</Text>
          </View>
          <View className='flex-row items-start gap-2'>
            <MaterialIcons name='check-circle' size={20} color={'#0f766e'} />
            <Text className='text-slate-700 flex-1'>Progress tracking with streaks, minutes, and sessions.</Text>
          </View>
          <View className='flex-row items-start gap-2'>
            <MaterialIcons name='check-circle' size={20} color={'#0f766e'} />
            <Text className='text-slate-700 flex-1'>Gentle reminders to keep your practice consistent.</Text>
          </View>
        </View>

        <View className='items-center pt-4'>
          <Text className='text-xs text-slate-500'>Made with care by Zarjij Hasan Joy</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
