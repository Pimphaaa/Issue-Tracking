import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


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
      {/* Header with logo */}
      <View style={styles.header}>
        
        <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
        
      </View>

      {/* User name */}
      <Text style={styles.username}>ชาติชาย นายทหาร</Text>

      {/* Main Title */}
      <View style={styles.mainCard}>
        <Text style={styles.mainTitle}>แจ้ง</Text>
      </View>

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
    marginTop: 0,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    marginVertical: 16,
    fontSize: 16,
    fontWeight: '600',
    
  },
  mainCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
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