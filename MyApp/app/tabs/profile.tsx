import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    console.log('Logged out');
    router.replace('/'); // กลับไปหน้า login
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
          <Feather name="log-out" size={24} color="#fff" />
        </TouchableOpacity>

        <Image
          source={require('../images/profile.jpeg')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>นาย หมี่เกี๊ยว ต้มยำ</Text>
        <Text style={styles.email}>Tumyum@example.com</Text>
      </View>

      {/* กล่องข้อมูล */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>ข้อมูลส่วนตัว</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>เบอร์โทรศัพท์:</Text>
          <Text style={styles.value}>081-234-5678</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>วันเกิด:</Text>
          <Text style={styles.value}>1 มกราคม 1990</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>ที่อยู่:</Text>
          <Text style={styles.value}>123/45 ดอยตุง เชียงราย</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  header: {
    height: 300,
    backgroundColor: 'skyblue',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    position: 'relative',
  },
  logoutIcon: {
    position: 'absolute',
    top: 50,
    right: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 50,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: '#eee',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 20,
    padding: 20,
    elevation: 4, // สำหรับ Android
    shadowColor: '#000', // สำหรับ iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 110,
    color: '#444',
  },
  value: {
    flex: 1,
    color: '#555',
  },
});
