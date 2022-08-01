import React, {useState} from 'react';
import {KeyboardAvoidingView ,StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Keyboard } from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]); 
    setTask(null);
  }

  const deleteTask = (index) => {
    setTaskItem(taskItem.filter((item, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Daily Task's</Text>

        <View style={styles.items}>

          {
          taskItem.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
            ) 
          })}

        </View>
      </View>




    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios' ? 'padding' : 'height'
      }
      style={styles.writeTaskWrapper}
    >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Add</Text>
            </View>

          </TouchableOpacity>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',

  },
  items:{
    marginTop: 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 60,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
  },
  addWrapper:{
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addText:{
    fontSize: 16,
    fontWeight: 'bold',
  },

});
