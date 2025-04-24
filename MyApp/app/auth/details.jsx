import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Details() {
  const router = useRouter()

  const statusList = [
    { time: '16 Nov 2021 16:23:05', label: 'ผู้รับเรื่อง', location: 'Cibitung, Jakarta Indonesia' },
    { time: '16 Nov 2021 16:23:05', label: 'ผู้อนุมัติ', location: 'Karawang  Indonesia' },
    { time: '16 Nov 2021 16:23:05', label: 'ผู้เจ้าหน้าที่', location: 'Cikarang, Jakarta Indonesia' },
    { time: '16 Nov 2021 16:23:05', label: 'ผู้รับงาน', location: 'Cikarang, Jakarta Indonesia' },
    { time: '16 Nov 2021 16:23:05', label: 'จบงาน', location: 'Karawang  Indonesia' },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>รายละเอียด</Text>
        </View>
      </View>

      {/* Status Timeline */}
      <ScrollView contentContainerStyle={styles.content}>
        {statusList.map((item, index) => (
          <View key={index} style={styles.stepContainer}>
            {/* จุดและเส้น */}
            <View style={styles.timeline}>
              <View style={styles.dot} />
              {index < statusList.length - 1 && <View style={styles.line} />}
            </View>
            {/* ข้อมูล */}
            <View style={styles.info}>
              <Text style={styles.time}>Date / Time</Text>
              <Text style={styles.timeValue}>{item.time}</Text>
              <Text style={styles.statusLabel}>{item.label}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'skyblue',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 90,
  },
  timeline: {
    alignItems: 'center',
    width: 30,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#4CAF50',
    marginTop: 2,
  },
  info: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  timeValue: {
    fontSize: 12,
    marginBottom: 4,
    color: '#333',
  },
  statusLabel: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
})
