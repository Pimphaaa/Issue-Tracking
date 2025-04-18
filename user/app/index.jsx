import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    date: '19 ตุลาคม 2021 12:05',
    topic: 'แจ้งซ่อม',
    status: 'รอดำเนินการ',
    statusColor: '#F7931E',
  },
  {
    id: '2',
    date: '19 ตุลาคม 2021 12:05',
    topic: 'แจ้งซ่อม',
    status: 'ดำเนินการเรียบร้อย',
    statusColor: '#4CAF50',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.label}>วัน / เวลา</Text>
        <Text>: {item.date}</Text>
        <Text style={styles.label}>เรื่อง</Text>
        <Text>: {item.topic}</Text>
        <Text style={styles.label}>สถานะ</Text>
        <Text style={{ color: item.statusColor }}> : {item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        <Text style={styles.username}>ชาติชาย นายทหาร</Text> 
      </View>
      
      
      
      <TouchableOpacity style={styles.mainCard} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.mainTitle}>แจ้ง</Text>
      </TouchableOpacity>

      

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    backgroundColor: '#1E1E2E',
    minHeight: 180,
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logo: {
    width: 350,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  mainCard: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    width: '90%',              // ขยายเกือบเต็มความกว้าง
    height:  100,                // ความสูงที่ชัดเจน
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1E1E2E',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -40,            // ทับลงมาจาก header
    alignSelf: 'center',       // ให้ปุ่มอยู่ตรงกลางหน้าจอ
    zIndex: 10,
    elevation: 5,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F1F1F',
  },
  username: {
    color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  marginTop: 10,
  marginLeft: 20, // เพิ่มระยะจากขอบ
  textAlign: 'left',
  alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#1E1E2E',
    elevation: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
  },
});
