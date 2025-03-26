import { Image, StyleSheet, Text, View } from "react-native";
import Colors from './../contant/Corlors'



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
     <Image source={require('./../assets/images/landing.png')}
     style={{
      width: '100%',
      height: 300,
      marginTop: 60,
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
          fontWeight: 'bold',
          textAlign: 'center',
          color: Colors.WHITE
        }}>
          Welcome to my app
        </Text>

        <Text style={{
          fontSize: 10,
          marginTop: 20,
          textAlign: 'center',
          color: Colors.WHITE
        }}>
        เพียงแค่มีบัญชี Spotify ฟรีที่มีโฆษณา คุณก็สามารถเพิ่ม แก้ไข และซิงค์เนื้อเพลงผ่าน Musixmatch ได้แล้ว หากคุณลิงก์บัญชี Spotify Premium เอาไว้ Musixmatch ก็จะจับคู่แคตตาล็อก Spotify ของคุณเข้ากับบัญชี Musixmatch Pro ให้โดยอัตโนมัติ
        </Text>

        <View style={styles.button}>
          <Text style={[styles.buttonText,{ color: Colors.PRIMARY}]}>Get Started</Text>
        </View>
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