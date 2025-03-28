import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from './../contant/Corlors'
import { useRouter } from "expo-router";



export default function Index() {
  
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
     <Image source={require('./../assets/images/background.png')}
     style={{
      width: '100%',
      height: 100,
      marginTop: 300,
     }}
     />

     <View style={{
          padding: 25,
          backgroundColor: Colors.GRAY,
          height: '100%',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>

        
        <Text style={{
          fontSize: 31,
          
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily: 'outfit-semibold'
        }}>
          Welcome to my app
        </Text>

        <Text style={{
          fontSize: 10,
          marginTop: 20,
          textAlign: 'center',
          color: Colors.WHITE
        }}>
          จระเข้ (อีสาน,ลาว: แข้,แข่) เป็นวงศ์ของสัตว์เลื้อยคลานขนาดใหญ่ ใช้ชื่อทางวิทยาศาสตร์ว่า Crocodylidae อยู่ในอันดับจระเข้ (Crocodilia)
          มีลักษณะโดยรวมคือ ส่วนปลายของหัวแผ่กว้างหรือเรียวยาวบางตัวปากเป็นรูปตัว v และ u ขากรรไกรยาวและกว้าง โคนหางเป็นกล้ามเนื้อมัดใหญ่และแข็งแรงเรียกว่า 
          "บ้องตัน" ใช้ในการฟาดเพื่อป้องกันตัว หางแบนยาวใช้โบกว่ายน้ำ
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={() => router.push('./auth/Login')}  // เชื่อมหน้าlogin
        >
          <Text style={[styles.buttonText,{ color: Colors.PRIMARY}]}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>มีบัญชียังงงงง</Text>
        </View>
        
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15
  }
});