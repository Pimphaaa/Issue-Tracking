import { View, Text ,Image } from 'react-native'
import React from 'react'

export default function SingIn() {
  return (
    <View>
      <Image source={require('./../../assets/images/doitung.jpg')} 
      style ={{
        width: 180,
        height: 180
      }}
      
      />
    </View>
  )
}