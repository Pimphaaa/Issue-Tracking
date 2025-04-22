import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* รูปโปรไฟล์ */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../images/profile.jpeg')} // ใส่ path ของรูปโปรไฟล์
          style={styles.profilePicture}
        />
      </View>

      {/* ข้อมูลผู้ใช้ */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>

      {/* ปุ่มการตั้งค่า */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      {/* ปุ่มออกจากระบบ */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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
  profilePictureContainer: {
    borderWidth: 5,
    borderColor: '#ffffff',
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75, // ให้เป็นวงกลม
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
