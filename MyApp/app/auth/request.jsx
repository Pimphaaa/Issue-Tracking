import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Platform, StatusBar, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Calendar } from 'react-native-calendars';

export default function Request() {
  const router = useRouter();
  const [unitOpen, setUnitOpen] = useState(false);
  const [unitValue, setUnitValue] = useState(null);
  const [unitItems, setUnitItems] = useState([
    { label: 'หน่วยงาน A', value: 'a' },
    { label: 'หน่วยงาน B', value: 'b' },
  ]);

  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [typeItems, setTypeItems] = useState([
    { label: 'ประเภท 1', value: '1' },
    { label: 'ประเภท 2', value: '2' },
  ]);

  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [summary, setSummary] = useState('');
  const [detail, setDetail] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileUri, setFileUri] = useState('');

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*', copyToCacheDirectory: true });
      if (result.type === 'success') {
        setFileName(result.name);
        setFileUri(result.uri);
      }
    } catch (error) {
      Alert.alert('เกิดข้อผิดพลาด', 'ไม่สามารถเลือกไฟล์ได้');
    }
  };

  const handleDateChange = (day) => {
    setSelectedDate(day.dateString);
    setShowDatePicker(false);
  };

  const confirmCancel = () => {
    Alert.alert(
      'ยืนยันการยกเลิก',
      'คุณต้องการยกเลิกการกรอกข้อมูลหรือไม่?',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        { text: 'ยืนยัน', onPress: () => router.back() },
      ],
      { cancelable: false }
    );
  };

  const confirmSave = () => {
    Alert.alert(
      'ยืนยันการบันทึก',
      'คุณต้องการบันทึกข้อมูลหรือไม่?',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        { text: 'ยืนยัน', onPress: () => {
          // ตัวอย่าง ส่งข้อมูล หรือ ไปหน้าอื่น
          router.push('/'); 
        }},
      ],
      { cancelable: false }
    );
  };

  const isFormValid = () => {
    return unitValue && typeValue && selectedDate && summary && detail;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Icon name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>คำขอบริการ</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {/* หน่วยงาน + ประเภท (แนวตั้ง) */}
        <View style={{ gap: 10, zIndex: 3000 }}>
          <View>
            <Text style={styles.label}>หน่วยงาน *</Text>
            <DropDownPicker
              open={unitOpen}
              value={unitValue}
              items={unitItems}
              setOpen={setUnitOpen}
              setValue={setUnitValue}
              setItems={setUnitItems}
              style={styles.noBorderPicker}
              dropDownContainerStyle={styles.dropDownContainer}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>ประเภท *</Text>
            <DropDownPicker
              open={typeOpen}
              value={typeValue}
              items={typeItems}
              setOpen={setTypeOpen}
              setValue={setTypeValue}
              setItems={setTypeItems}
              style={styles.noBorderPicker}
              dropDownContainerStyle={styles.dropDownContainer}
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>

        <Text style={styles.label}>วันที่ขอบริการ *</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.datePickerButton}
        >
          <Text style={styles.dateText}>{selectedDate || 'เลือกวันที่'}</Text>
          <Icon name="calendar" size={20} color="#0288d1" />
        </TouchableOpacity>

        {showDatePicker && (
          <View style={styles.datePicker}>
            <Calendar
              onDayPress={handleDateChange}
              markedDates={{ [selectedDate]: { selected: true, selectedColor: '#0288d1', selectedTextColor: '#fff' } }}
              monthFormat={'yyyy MM'}
              style={styles.calendar}
            />
          </View>
        )}

        <Text style={styles.label}>สรุปความต้องการโดยย่อ *</Text>
        <TextInput
          style={styles.input}
          value={summary}
          onChangeText={setSummary}
          placeholder="กรอกสรุปความต้องการ"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>รายละเอียด :</Text>
        <TextInput
          style={[styles.input, { height: 120 }]}
          multiline
          value={detail}
          onChangeText={setDetail}
          placeholder="กรอกรายละเอียดเพิ่มเติม"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>ไฟล์แนบ</Text>
        <TouchableOpacity
          onPress={pickFile}
          style={styles.fileButton}
          activeOpacity={0.7}
        >
          <Text style={styles.fileText}>{fileName || 'กรุณาเลือกไฟล์แนบ (ไม่เกิน 10 MB)'}</Text>
        </TouchableOpacity>

        {fileUri && fileName.match(/\.(jpg|jpeg|png|gif)$/i) && (
          <Image
            source={{ uri: fileUri }}
            style={styles.fileImage}
            resizeMode="cover"
          />
        )}

        {/* Buttons */}
        {isFormValid() && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={confirmCancel}
            >
              <Text style={styles.buttonText}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={confirmSave}
            >
              <Text style={styles.buttonText}>บันทึก</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerContainer: {
    backgroundColor: '#0288d1',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: { padding: 15 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  scrollContent: { padding: 16, paddingBottom: 30 },

  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  noBorderPicker: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 5,
  },
  dropDownContainer: {
    borderColor: '#ddd',
    borderRadius: 8,
  },

  datePickerButton: {
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    marginBottom: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    color: '#0288d1',
  },
  datePicker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  calendar: {
    borderRadius: 8,
    height: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    marginBottom: 15,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  fileButton: {
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  fileText: {
    color: '#0288d1',
  },
  fileImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E53935',
    padding: 14,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
