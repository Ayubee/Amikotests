import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const Amina = () => console.log('click')
  return (
    <SafeAreaView style={styles.container} >
      <Text onPress={Amina}>Amiko</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
img: {
  top:100,
  width: 200,
  height:200,
 alignItems: 'center',
 justifyContent:'center'
}
    
});
