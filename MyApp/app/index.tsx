import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Colors from './constant/Colors';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('./images/doitung-logo.png')}
          style={styles.logo}
        />
        
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/auth/signUp")}>
          <Text style={styles.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={() => router.push("/auth/signIn")}>
          <Text style={styles.buttonOutlineText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  topSection: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 48,
    gap: 16,
  },
  button: {
    backgroundColor: '#2d2d2d',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#2d2d2d',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#2d2d2d',
    fontSize: 18,
    fontWeight: '600',
  },
});
