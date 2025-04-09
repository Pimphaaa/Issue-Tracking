import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Profile({ navigation }) {
  // จำลองข้อมูลผู้ใช้งาน (อาจโหลดจาก API จริงในอนาคต)
  const user = {
    name: "ชานิขาย ก๋วยเตี๋ยว",
    employee_id: "B2971STJ",
    department: "IT Support",
    avatar: "https://i.pravatar.cc/100?img=1", // ตัวอย่างรูปโปรไฟล์
  };

  const handleLogout = () => {
    // ตัวอย่างการออกจากระบบ (สามารถเพิ่ม logic ล้าง token ฯลฯ)
    navigation.replace("Login"); // สมมติว่ามีหน้า Login
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.detail}>รหัสพนักงาน: {user.employee_id}</Text>
      <Text style={styles.detail}>หน่วยงาน: {user.department}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="ออกจากระบบ" onPress={handleLogout} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    marginTop: 6,
  },
});
