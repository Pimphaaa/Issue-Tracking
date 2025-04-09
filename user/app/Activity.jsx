import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Alert, StyleSheet } from 'react-native';

export default function Activity({ navigation }) {
  const [department, setDepartment] = useState('');
  const [requestType, setRequestType] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async () => {
    if (!department || !requestType || !date || !summary) {
      Alert.alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const payload = {
      employee_id: "B2971STJ",
      name: "ชานิชาย นายอาหาร",
      department,
      request_type: requestType,
      service_date: date,
      summary,
      details,
    };

    const res = await fetch("http://your-server/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      Alert.alert("ส่งคำร้องสำเร็จ");
      navigation.navigate("List");
    } else {
      Alert.alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>หน่วยงานรับบริการ *</Text>
      <TextInput style={styles.input} onChangeText={setDepartment} />

      <Text style={styles.label}>ประเภทที่ร้องขอ *</Text>
      <TextInput style={styles.input} onChangeText={setRequestType} />

      <Text style={styles.label}>วันที่ขอบริการ *</Text>
      <TextInput style={styles.input} onChangeText={setDate} placeholder="YYYY-MM-DD" />

      <Text style={styles.label}>สรุปความต้องการโดยย่อ *</Text>
      <TextInput style={styles.input} onChangeText={setSummary} />

      <Text style={styles.label}>รายละเอียด</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        onChangeText={setDetails}
      />

      <Button title="บันทึก" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
  },
});
