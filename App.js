import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View  styles={styles.items}>

          {/* This is the task */}
          <Task text={'Task 1'}></Task>
          <Task text={'Task 2'}></Task>


        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
