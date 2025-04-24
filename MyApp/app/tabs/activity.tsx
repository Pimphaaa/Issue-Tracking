import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Activity() {
  const router = useRouter()

  const activityData = [
    {
      id: 1,
      date: '19 ตุลาคม 2567',
      title: 'แจ้งซ่อม',
      detail: 'ซ่อมสายไฟ',
    },
    {
      id: 2,
      date: '19 ตุลาคม 2567',
      title: 'แจ้งซ่อม',
      detail: 'ซ่อมก็อกน้ำในห้องน้ำ',
    },
  ]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e0f7fa' }}>
      <View style={styles.header}>
        <Ionicons name="clipboard-outline" size={40} color="#fff" style={{ marginBottom: 10 }} />
        <Text style={styles.headerTitle}>กิจกรรมของฉัน</Text>
        <Text style={styles.headerSubtitle}>ติดตามสถานะการแจ้งซ่อมของคุณ</Text>
      </View>

      <View style={{ padding: 16 }}>
        {activityData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.row}>
                <Text style={styles.label}>วัน / เวลา:</Text>
                <Text style={styles.value}>{item.date}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>เรื่อง:</Text>
                <Text style={styles.value}>{item.title}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>ความต้องการ:</Text>
                <Text style={styles.value}>{item.detail}</Text>
              </View>
              <TouchableOpacity
                style={styles.detailLink}
                onPress={() => router.push('/auth/details')}
              >
                <Text style={styles.linkText}>ดูรายละเอียด</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    backgroundColor: 'skyblue',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#f0f8ff',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardContent: {},
  row: {
    flexDirection: 'row',
    marginBottom: 6,
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
  detailLink: {
    marginTop: 8,
    alignItems: 'flex-end',
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '600',
  },
})
