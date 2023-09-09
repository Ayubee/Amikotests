import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const Amina = () => console.log('click')
  return (
    <SafeAreaView style={styles.container} >
      <Text onPress={Amina}>Amiko</Text>

  <View style={styles.flex}>
    <View style={styles.padding} >
      <Image style={styles.img} source={require('./assets/15-19-01-0057.jpg')} />
       <Text style={styles.text}>
        Tovar artikuli:15-19-01-0057
       </Text>
       </View>

     <View style={styles.padding}>
       <Image style={styles.img} source={require('./assets/15-19-01-0057.jpg')} />
        <Text style={styles.text}>
        Tovar artikuli:15-19-01-0057
        </Text>
      </View>

    </View>

    <View style={styles.flex}>
    <View style={styles.padding} >
      <Image style={styles.img} source={require('./assets/15-19-01-0057.jpg')} />
       <Text style={styles.text}>
        Tovar artikuli:15-19-01-0057
       </Text>
       </View>

     <View>
       <Image style={styles.img} source={require('./assets/15-19-01-0057.jpg')} />
        <Text style={styles.text}>
        Tovar artikuli:15-19-01-0057
        </Text>
      </View>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
img:{
  width: 150,
  height:150,

},

flex: {
  width:'100%',
  flex:1,
  flexDirection:'row',
  alignContent:'space-around',
  justifyContent:'space-around',
  height:0
},
text:{
fontSize:10,
},
padding:{
  height:0,position:'relative '
}
    
});
