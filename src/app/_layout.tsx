import { Stack } from 'expo-router';
import '../../global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />

      <Stack.Screen 
        name="meditationSreen/[id]" 
        options={{ title: "Meditation", headerShown: false, animation: "slide_from_bottom", animationDuration: 200 }} 
      />
    </Stack>
  );
};

export default RootLayout;
