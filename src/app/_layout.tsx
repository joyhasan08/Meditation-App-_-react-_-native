import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="meditationScreen/[id]"
        options={{ title: 'Meditation', headerShown: false, animation: 'slide_from_bottom', animationDuration: 200 }}
      />
    </Stack>
  );
}
