import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🏠 หน้าหลัก</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
