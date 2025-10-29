import { useMemo, useState } from 'react';
import { FlatList, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { meditation } from '../../data';
import { meditationList } from '../../components/MeditationCard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'Audio' | 'Video' | 'Pro'>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return meditation.filter(m => {
      const byText = !q || m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
      const byType = filter === 'All' || (filter === 'Pro' ? m.pro : m.type.toLowerCase() === filter.toLowerCase());
      return byText && byType;
    });
  }, [query, filter]);

  const FilterPill = ({ label }: { label: 'All' | 'Audio' | 'Video' | 'Pro' }) => (
    <TouchableOpacity onPress={() => setFilter(label)} className={`px-3 py-1 rounded-full border ${filter === label ? 'bg-teal-600 border-teal-600' : 'bg-white border-slate-300'}`}>
      <Text className={`${filter === label ? 'text-white' : 'text-slate-700'}`}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='bg-white flex-1'>
      <FlatList
        className='flex-1'
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => meditationList(item)}
        contentContainerClassName='gap-3 pb-8 '
        ListHeaderComponent={() => (
          <View>
            <View className='flex flex-row items-center justify-between px-4 pt-2'>
              <View>
                <Text className='text-2xl font-bold mb-1'>Hi, Joy Hasan</Text>
                <Text className='text-slate-600'>Welcome to your calm space</Text>
              </View>
              <View className='border-2 border-teal-500 rounded-full m-2 p-1'>
                <Image
                  className='rounded-full'
                  resizeMode='cover'
                  style={{ height: 40, width: 40 }}
                  source={require('../../../assets/joy.jpg')}
                />
              </View>
            </View>

            <View className='px-4 pt-3'>
              <View className='flex-row items-center bg-slate-100 rounded-xl px-3'>
                <MaterialIcons name='search' size={20} color={'#475569'} />
                <TextInput
                  placeholder='Search meditations'
                  className='flex-1 px-2 py-3'
                  value={query}
                  onChangeText={setQuery}
                />
              </View>
            </View>

            <View className='px-4 pt-3'>
              <ImageBackground
                className='w-full h-32 rounded-2xl overflow-hidden'
                resizeMode='cover'
                source={require('../../../assets/90114.jpg')}
              >
                <View className='flex-1 bg-black/30 p-4 justify-center rounded-2xl'>
                  <Text className='text-white text-xl font-semibold'>Find Your Calm</Text>
                  <Text className='text-white/90 text-sm'>Breathe in peace, breathe out stress</Text>
                </View>
              </ImageBackground>
            </View>

            <View className='px-4 pt-4 flex-row gap-2'>
              <FilterPill label='All' />
              <FilterPill label='Audio' />
              <FilterPill label='Video' />
              <FilterPill label='Pro' />
            </View>

            <View className='px-4 pt-3'>
              <Text className='text-xl font-semibold'>Recommended</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
