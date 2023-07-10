import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Realm from 'realm';


const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'objectId',
    title: 'string',
    completed: 'bool',
  },
  primaryKey: '_id',
};
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    Realm.open({ schema: [TaskSchema] }).then((realm) => {
      const realmTasks = realm.objects('Task');
      setTasks(realmTasks);
    });
  }, []);

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    Realm.open({ schema: [TaskSchema] }).then((realm) => {
      realm.write(() => {
        realm.create('Task', {
          _id: new Realm.BSON.ObjectId(),
          title: newTaskTitle,
          completed: false,
        });
        setNewTaskTitle('');
        const realmTasks = realm.objects('Task');
        setTasks(realmTasks);
      });
    });
  };

  const handleToggleTaskCompletion = (taskId) => {
    Realm.open({ schema: [TaskSchema] }).then((realm) => {
      const task = realm.objectForPrimaryKey('Task', taskId);
      realm.write(() => {
        task.completed = !task.completed;
        const realmTasks = realm.objects('Task');
        setTasks(realmTasks);
      });
    });
  };

  const handleDeleteTask = (taskId) => {
    Realm.open({ schema: [TaskSchema] }).then((realm) => {
      realm.write(() => {
        const task = realm.objectForPrimaryKey('Task', taskId);
        realm.delete(task);
        const realmTasks = realm.objects('Task');
        setTasks(realmTasks);
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
          placeholder="Enter task title"
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>{item.title}</Text>
            <Button
              title={item.completed ? 'Mark Incomplete' : 'Mark Complete'}
              onPress={() => handleToggleTaskCompletion(item._id)}
            />
            <Button title="Delete" onPress={() => handleDeleteTask(item._id)} color="red" />
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskTitle: {
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
});
// import { View, Text } from 'react-native'
// import React from 'react'

// const TodoList = () => {
//   return (
//     <View>
//       <Text>TodoList</Text>
//     </View>
//   )
// }

// export default TodoList