import { View, Text, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackComponent } from 'react-native';
import React, { useState } from 'react';




export default function Login() {
  

  return (
    <KeyboardAvoidingView
      
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      
         
            <Image source={require('./../../assets/images/doitung-logo.png')}
              style={{
                alignItems: 'center',
                marginTop: 20,
                width: '100%',
                height: 100,
                resizeMode: 'contain'
              }}
            />

            <Text>
              สร้างบัญชี
            </Text>
            <TextInput placeholder='ชื่อจริง'></TextInput>

          <Image source={require('./../../assets/images/background.png')}
            style={{
              width: '100%',
              height: 100,
              position: 'absolute',
              bottom: 0,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}
