import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const data = [
    {
      id: 1,
      date: '19 ตุลาคม 2021 12:05',
      title: 'แจ้งซ่อม',
      status: 'รอดำเนินการ',
      statusColor: '#d88f37',
    },
    {
      id: 2,
      date: '19 ตุลาคม 2021 12:05',
      title: 'แจ้งซ่อม',
      status: 'ดำเนินการเรียบร้อย',
      statusColor: '#4CAF50',
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e0f7fa' }}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../images/profile.jpeg')}
            style={styles.avatar}
          />
          <View style={styles.nameSection}>
            <Text style={styles.welcomeText}>ยินดีต้อนรับ</Text>
            <Text style={styles.username}>นาย หมี่เกี๊ยว ต้มยำ</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push("/auth/request")} style={styles.actionButton}>
          <Text style={styles.actionText}>📝 แจ้งความต้องการ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardSection}>
        <Text style={styles.sectionTitle}>รายการล่าสุด</Text>
        {data.map((item) => (
          <View key={item.id} style={styles.statusCard}>
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
                <Text style={styles.label}>สถานะ:</Text>
                <Text style={[styles.value, { color: item.statusColor }]}>{item.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 16,
  },
  nameSection: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: '#e0f7fa',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  actionButton: {
    backgroundColor: '#00796B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  statusCard: {
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
});
