import { View, Text ,Image } from 'react-native'
import React from 'react'

export default function SingIn() {

  return (

    
    <View>

    </View>,


    <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }}>
     <Image source={require('./../../assets/images/background.png')}
     style={{
      width: '100%',
      height: 100,
      marginTop: 300,
     }}
     />
    </View>
  )
}