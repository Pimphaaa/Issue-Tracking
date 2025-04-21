import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from '../constant/Colors';
import { useRouter } from "expo-router";

export default function Index() {

  const router =useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/partial-react-logo.png')}
          style={styles.image}
        />

        <Text style={styles.title}>Let's Get Started</Text>

        <TouchableOpacity style={styles.button} onPress={()=>router.push("/auth/signUp")}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>already have account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.PINK,
    paddingVertical: 12,
    width: 300, 
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
