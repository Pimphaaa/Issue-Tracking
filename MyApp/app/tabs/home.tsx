import { View, Text, Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {
  return (
    <View style={{ marginTop: 55 }}>
      <Image source={require('../images/logo1.png')}
        style={{position: 'absolute',top: 15,right:30,width: 350,height: 50,zIndex: 20,}}/>
      <View style={{width: '100%',height: 200,borderBottomLeftRadius: 40,borderBottomRightRadius: 40,backgroundColor: 'skyblue',}}/>
      <Text>นาย หมี่เกี๊ยว ต้มยำ</Text>
    </View>
  )
}

