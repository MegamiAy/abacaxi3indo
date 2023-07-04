import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { db } from "../config/firebase";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import Header from "./Header";
import { Styles } from "../utils/Styles";

export default function Testeteste() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const taskList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
      }));
      setTasks(taskList);
    };

    fetchTasks();
  }, []);

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(collection(db, "tasks", taskId));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  return (
    <View style={Styles.container}>
      <Header title="Tarefas" />
      {tasks.map((task) => (
        <View key={task.id} style={Styles.container}>
          <View style={Styles.taskheader}>
            <Text style={Styles.titlesmall}>Titulo: {task.name}</Text>
            <TouchableOpacity onPress={() => deleteTask(task.id)}
              style={Styles.del}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.taskbody}>
            <Text>Descrição: {task.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}