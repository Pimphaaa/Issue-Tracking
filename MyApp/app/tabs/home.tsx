import { View, Text, Image,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ marginTop: 55 }}>
      <Image source={require('../images/logo1.png')}
        style={{position: 'absolute',top: 15,right:30,width: 350,height: 50,zIndex: 20,}}/>
      <View style={{width: '100%',height: 200,borderBottomLeftRadius: 40,borderBottomRightRadius: 40,backgroundColor: '#242532',}}/>
      <Text style={{position: 'absolute', top: 100,left:25,color: 'white', fontSize: 20, fontWeight: 'bold'}}>นาย หมี่เกี๊ยว ต้มยำ</Text>
        <TouchableOpacity 
          onPress={() => router.push("/auth/request")} // ใส่ปีกกาให้ถูกต้องที่นี่
          style={[{ position: 'absolute', top: 150, alignSelf: 'center' }, styles.button]}
        >
              <Text style={styles.buttonText}>เเจ้ง</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 340,
    padding: 40,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});