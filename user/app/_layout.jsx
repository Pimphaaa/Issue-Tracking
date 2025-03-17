import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'IBMPlexSansThaiLooped-Bold':require('./../assets/fonts/IBMPlexSansThaiLooped-Bold.ttf')
,   'IBMPlexSansThaiLooped-ExtraLight':require('./../assets/fonts/IBMPlexSansThaiLooped-ExtraLight.ttf'),
    'IBMPlexSansThaiLooped-Light':require('./../assets/fonts/IBMPlexSansThaiLooped-Light.ttf'),
    'IBMPlexSansThaiLooped-Medium':require('./../assets/fonts/IBMPlexSansThaiLooped-Medium.ttf'),
  })




  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="login"
      options={{
        headerShown:false
      }}

      />

      

    </Stack>
  );
  }
