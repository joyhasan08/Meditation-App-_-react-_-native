import { Text, View, Image, ScrollView, SafeAreaView, Linking, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function AboutScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView contentContainerClassName='pb-8'>
        {/* Hero Section */}
        <View className='bg-teal-50 p-8 items-center'>
          <Image
            resizeMode='contain'
            style={{ height: 100, width: 100 }}
            source={require('../../../assets/splash-icon.png')}
          />
          <Text className='text-3xl font-semibold mt-4 text-center'>Your Daily{'\n'}Meditation Partner</Text>
          <Text className='text-center text-slate-600 leading-7 mt-3'>
            We craft simple, calming experiences to help you build a daily meditation habit.
          </Text>
        </View>

        {/* Mission Section */}
        <View className='p-6'>
          <Text className='text-2xl font-semibold mb-4'>Our Mission</Text>
          <View className='gap-4'>
            {[
              {
                icon: 'auto-awesome' as const,
                title: 'Mental Wellbeing',
                description: 'Empower individuals to achieve better mental health through mindful practices.'
              },
              {
                icon: 'all-inclusive' as const,
                title: 'Accessible to All',
                description: 'Make meditation practices accessible to everyone, anywhere, anytime.'
              },
              {
                icon: 'groups' as const,
                title: 'Community Focus',
                description: 'Build a supportive community of mindful individuals growing together.'
              }
            ].map((item, index) => (
              <View key={index} className='flex-row items-start bg-white border border-slate-200 rounded-xl p-4'>
                <View className='bg-teal-100 rounded-full p-2 mr-4'>
                  <MaterialIcons name={item.icon} size={24} color="#0d9488" />
                </View>
                <View className='flex-1'>
                  <Text className='font-semibold text-lg mb-1'>{item.title}</Text>
                  <Text className='text-slate-600'>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Features Section */}
        <View className='px-6'>
          <Text className='text-2xl font-semibold mb-4'>Features</Text>
          <View className='bg-teal-50 rounded-2xl p-6'>
            <View className='flex-row flex-wrap justify-between gap-y-6'>
              {[
                { title: 'Guided Sessions', number: '100+' },
                { title: 'Active Users', number: '10K+' },
                { title: 'Minutes Meditated', number: '1M+' },
                { title: 'Daily Sessions', number: '5K+' }
              ].map((stat, index) => (
                <View key={index} className='w-[45%] items-center'>
                  <Text className='text-2xl font-bold text-teal-700'>{stat.number}</Text>
                  <Text className='text-center text-slate-700 mt-1'>{stat.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Team Section */}
        <View className='p-6'>
          <Text className='text-2xl font-semibold mb-4'>Our Team</Text>
          <View className='flex-row flex-wrap justify-between'>
            {[
              {
                name: 'Joy Hasan',
                role: 'Founder & Lead',
                image: require('../../../assets/joy.jpg')
              },
              {
                name: 'Sarah Chen',
                role: 'Meditation Expert',
                image: require('../../../assets/splash-icon.png')
              }
            ].map((member, index) => (
              <View key={index} className='w-[48%] items-center bg-white border border-slate-200 rounded-xl p-4 mb-4'>
                <Image
                  source={member.image}
                  style={{ width: 80, height: 80 }}
                  className='rounded-full'
                  resizeMode='cover'
                />
                <Text className='font-semibold mt-2'>{member.name}</Text>
                <Text className='text-slate-600 text-sm'>{member.role}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Section */}
        <View className='px-6'>
          <Text className='text-2xl font-semibold mb-4'>Get in Touch</Text>
          <View className='gap-3'>
            <TouchableOpacity 
              onPress={() => Linking.openURL('mailto:support@meditationapp.com')}
              className='flex-row items-center bg-white border border-slate-200 rounded-xl p-4'
            >
              <MaterialIcons name="email" size={24} color="#0d9488" className='mr-3' />
              <Text className='text-slate-700 ml-3'>support@meditationapp.com</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://twitter.com/meditationapp')}
              className='flex-row items-center bg-white border border-slate-200 rounded-xl p-4'
            >
              <MaterialIcons name="public" size={24} color="#0d9488" className='mr-3' />
              <Text className='text-slate-700 ml-3'>Follow us on Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
