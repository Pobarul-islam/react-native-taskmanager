import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,Platform, TextInput,TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native-web';
import Task from './Components/Task';


export default function App() {
  const [task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);
  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = () => {
    
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View  styles={styles.items}>

          {/* This is where the task will go  */}
          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item} />
              
            })
          }
          {/* This is the task */}
          <Task text={'Task 1'}></Task>
          <Task text={'Task 2'}></Task>


        </View>
      </View>

     {/* Write a Task  */}
      
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
      >
      
        <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text=> setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=> handleTask()}>
        <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
      
        </TouchableOpacity>
    </KeyboardAvoidingView>
      
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
  },
  
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#fff'

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    
  }

 
});
