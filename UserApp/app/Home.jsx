import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ยินดีต้อนรับเข้าสู่หน้า Home</Text>
      <Text style={styles.subtitle}>คุณเข้าสู่ระบบเรียบร้อยแล้ว!</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
