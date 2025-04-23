import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [summary, setSummary] = useState('');
  const [detail, setDetail] = useState('');
  const [fileName, setFileName] = useState('');

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*', copyToCacheDirectory: true });
    if (result.type === 'success') {
      setFileName(result.name);
    }
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  return (
    
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{ marginTop:'55',width: '100%', height: 50, backgroundColor: '#242532', justifyContent: 'center', paddingLeft: 10 }}>
        <TouchableOpacity onPress={() => router.push('/tabs/home')}>
          <Icon name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={{ padding: 16, backgroundColor: '#F4F4F4', margin: 16, borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1F1F1F' }}>ชาติเชษ นายทหาร</Text>
        <Text style={{ color: '#6C6C6C' }}>B 2971 STJ</Text>
      </View>

      {/* Form */}
      <View style={{ paddingHorizontal: 16, zIndex: 1000 }}>
        <Text>หน่วยงานรับบริการ *</Text>
        <DropDownPicker
          open={unitOpen}
          value={unitValue}
          items={unitItems}
          setOpen={setUnitOpen}
          setValue={setUnitValue}
          setItems={setUnitItems}
          style={{ marginBottom: 10 }}
          zIndex={3000}
          zIndexInverse={1000}
        />

        <Text>ประเภทที่ร้องขอ *</Text>
        <DropDownPicker
          open={typeOpen}
          value={typeValue}
          items={typeItems}
          setOpen={setTypeOpen}
          setValue={setTypeValue}
          setItems={setTypeItems}
          style={{ marginBottom: 10 }}
          zIndex={2000}
          zIndexInverse={2000}
        />

        <Text>วันที่ขอบริการ *</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 10,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>{formatDate(date)}</Text>
          <Icon name="calendar" size={20} color="#666" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <Text>สรุปความต้องการโดยย่อ *</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, padding: 10 }}
          value={summary}
          onChangeText={setSummary}
        />

        <Text>รายละเอียด :</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, padding: 10, height: 100 }}
          multiline
          value={detail}
          onChangeText={setDetail}
        />

        <Text>ไฟล์แนบ</Text>
        <TouchableOpacity
          onPress={pickFile}
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 20 }}
        >
          <Text>{fileName || 'กรุณาเลือกไฟล์แนบ (ไม่เกิน 10 MB)'}</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#E53935', padding: 12, borderRadius: 8, flex: 0.48 }}
            onPress={() => router.push('/Home')}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>ยกเลิก</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#4CAF50', padding: 12, borderRadius: 8, flex: 0.48 }}
            onPress={() => alert('บันทึกสำเร็จ')}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
