import { View, Text, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          
          {/* ใช้ ScrollView ป้องกันหน้าจอล้น และให้แตะที่อื่นแล้วปิดคีย์บอร์ด */}
          <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps="handled">
            
            <Image source={require('./../../assets/images/doitung-logo.png')}
              style={{
                alignItems: 'center',
                marginTop: 20,
                width: '100%',
                height: 100,
                resizeMode: 'contain'
              }}
            />

            <Text style={{ fontSize: 20 }}>มูลนิธิแม่ฟ้าหลวง ในพระราชูปถัมป์</Text>
            <Text>Welcome back to the app</Text>

            {/* ช่องกรอก Username */}
            <TextInput
              placeholder="รหัสพนักงาน"
              value={username}
              onChangeText={setUsername}
              style={{
                width: '80%',
                height: 50,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginTop: 20
              }}
            />

            {/* ช่องกรอก Password */}
            <View style={{ width: '80%', position: 'relative', marginTop: 15 }}>
              <TextInput
                placeholder="รหัสผ่าน"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
                style={{
                  width: '100%',
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingRight: 50, // เผื่อพื้นที่สำหรับปุ่มดูรหัสผ่าน
                }}
              />
              {/* ปุ่มแสดง/ซ่อนรหัสผ่าน */}
              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                style={{
                  position: 'absolute',
                  right: 15,
                  top: 15,
                }}
              >
                <Text>{secureText ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>

            {/* ปุ่ม Login */}
            <View style={{ marginTop: 20, width: '80%' }}>
              onPress={() => router.push('./Home.jsx')} 
              <Button title="Login" onPress={() => console.log('Login with:', username, password)} />
            </View>

          </ScrollView>

          {/* Background ด้านล่าง คงที่ ไม่ขยับขึ้นลง */}
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
