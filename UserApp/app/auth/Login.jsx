import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // ใช้ Navigation

export default function Login() {
  const navigation = useNavigation(); // ใช้ Hook สำหรับเปลี่ยนหน้า
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps="handled">
            <Image source={require('./../../assets/images/doitung-logo.png')}
              style={{ alignItems: 'center', marginTop: 80, width: '100%', height: 100, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 20 }}>มูลนิธิแม่ฟ้าหลวง ในพระราชูปถัมป์</Text>
            <Text>Welcome back to the app</Text>

            <TextInput
              placeholder="รหัสพนักงาน"
              value={username}
              onChangeText={setUsername}
              style={{ width: '80%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, paddingHorizontal: 10, marginTop: 20 }}
            />

            <View style={{ width: '80%', position: 'relative', marginTop: 15 }}>
              <TextInput
                placeholder="รหัสผ่าน"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
                style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, paddingHorizontal: 10, paddingRight: 50 }}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)} style={{ position: 'absolute', right: 15, top: 15 }}>
                <Text>{secureText ? '👁️' : '🙈'}</Text>
              </TouchableOpacity>
            </View>

            {/* ✅ ปุ่ม Login ที่จะพาไปหน้า Home */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')} // ใช้ navigation.navigate() เพื่อพาไปหน้า Home
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

          </ScrollView>

          <Image source={require('./../../assets/images/background.png')}
            style={{ width: '100%', height: 100, position: 'absolute', bottom: 0 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#4CAF50', // สีของปุ่ม
    marginTop: 20,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: '#FFFFFF' // สีของตัวอักษรในปุ่ม
  }
});
