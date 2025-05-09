import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {useColorScheme} from "react-native";


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      'Univia-PRO': require('./../../assets/fonts/UniviaPro-Regular.ttf'),
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      'Univia-BOLD': require('./../../assets/fonts/UniviaPro-Bold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
