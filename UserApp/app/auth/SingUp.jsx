import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

export default function SingUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!firstName || !lastName || !employeeId || !password || !confirmPassword) {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('แจ้งเตือน', 'รหัสผ่านไม่ตรงกัน');
      return;
    }

    console.log('ข้อมูลสมัครสมาชิก:', {
      firstName,
      lastName,
      employeeId,
      password,
    });

    Alert.alert('สำเร็จ', 'สมัครสมาชิกเรียบร้อยแล้ว');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>สมัครสมาชิก</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ชื่อ</Text>
          <TextInput
            style={styles.input}
            placeholder="กรอกชื่อของคุณ"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>นามสกุล</Text>
          <TextInput
            style={styles.input}
            placeholder="กรอกนามสกุลของคุณ"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>รหัสพนักงาน</Text>
          <TextInput
            style={styles.input}
            placeholder="กรอกรหัสพนักงาน"
            value={employeeId}
            onChangeText={setEmployeeId}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>รหัสผ่าน</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="กรอกรหัสผ่าน"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.toggle}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ยืนยันรหัสผ่าน</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="ยืนยันรหัสผ่าน"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Text style={styles.toggle}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </ScrollView>

      <Image
        source={require('./../../assets/images/background.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
  formContainer: {
    padding: 24,
    paddingBottom: 140,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  toggle: {
    fontSize: 18,
    paddingHorizontal: 8,
    color: '#2e86de',
  },
  button: {
    backgroundColor: '#2e86de',
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});
