import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';


export default function LoginScreen() {
  return (
    <View style>
      <Image source={require('./../../assets/images/doitungpic.png')}
        style={{
          width:'100%',
          height:500
        }}
      
      />

    </View>
  );
}
