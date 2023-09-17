import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View } from 'react-native';
import Fetch from './src/Fetch';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>News App</Text>
      <Fetch/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});
