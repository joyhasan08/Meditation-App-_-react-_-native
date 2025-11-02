import { SafeAreaView, ScrollView, View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [reminderTime, setReminderTime] = useState('08:00');

  const pickReminder = () => {
    Alert.alert('Reminder Time', undefined, [
      { text: '08:00', onPress: () => setReminderTime('08:00') },
      { text: '12:00', onPress: () => setReminderTime('12:00') },
      { text: '20:00', onPress: () => setReminderTime('20:00') },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="pb-8">
        <View className="px-6 pt-6">
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity onPress={() => router.back()} className="px-2 py-1">
              <Text className="text-teal-600">Back</Text>
            </TouchableOpacity>
            <Text className="text-2xl font-semibold">Settings</Text>
            <View style={{ width: 48 }} /> {/* spacer */}
          </View>

          <View className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-base font-medium">Notifications</Text>
                <Text className="text-sm text-gray-500">Enable push notifications</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ true: '#14b8a6' }}
              />
            </View>
          </View>

          <TouchableOpacity onPress={pickReminder} className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-base font-medium">Reminder Time</Text>
                <Text className="text-sm text-gray-500">Daily reminder at</Text>
              </View>
              <Text className="text-teal-600 font-semibold">{reminderTime}</Text>
            </View>
          </TouchableOpacity>

          <View className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-base font-medium">Theme</Text>
                <Text className="text-sm text-gray-500">Use dark mode</Text>
              </View>
              <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: '#14b8a6' }} />
            </View>
          </View>

          <TouchableOpacity className="bg-white border border-slate-200 rounded-xl p-4 mb-3">
            <Text className="text-base">Account</Text>
            <Text className="text-sm text-gray-500 mt-1">Manage account settings</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-50 border border-red-200 rounded-xl p-4 mt-6" onPress={() => Alert.alert('Sign out', 'Sign out tapped')}>
            <Text className="text-red-600 font-semibold text-center">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}