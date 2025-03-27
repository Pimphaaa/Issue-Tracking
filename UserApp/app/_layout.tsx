import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'outfit':require('../assets/fonts/Inter-Italic.ttf'),
    'outfit-light':require('../assets/fonts/Inter-Light.ttf'),
    'outfit-medium':require('../assets/fonts/Inter-Medium.ttf'),
    'outfit-semibold':require('../assets/fonts/Inter-SemiBold.ttf')
  })

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>

    </Stack>
  )
}
