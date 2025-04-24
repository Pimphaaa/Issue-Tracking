import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

export default function Activity() {
  const router = useRouter()

  const activityData = [
    {
      id: 1,
      date: '19 ตุลาคม 2567',
      title: 'แจ้งซ่อม',
      detail: 'ซ่อมแซมไฟ',
    },
    {
      id: 2,
      date: '19 ตุลาคม 2567',
      title: 'แจ้งซ่อม',
      detail: 'ซ่อมฝักบัวน้ำห้องน้ำ',
    },
  ]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header} />
      <View style={{ padding: 16 }}>
        {activityData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.label}>วัน / เวลา</Text>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.label}>เรื่อง</Text>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.label}>ความต้องการ</Text>
            <Text style={styles.text}>{item.detail}</Text>
            <TouchableOpacity onPress={() => router.push('/auth/details')}>
              <Text style={styles.link}>ดูรายละเอียด</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 55,
    width: '100%',
    height: 50,
    backgroundColor: '#242532',
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  text: {
    marginBottom: 4,
  },
  link: {
    color: 'blue',
    marginTop: 8,
    textAlign: 'right',
  },
})
