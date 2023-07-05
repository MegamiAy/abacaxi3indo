import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { db } from "../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Header from "./Header";
import { Styles } from "../utils/Styles";

export default function TaskP({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const taskList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
        }));
        setTasks(taskList);
      } catch (error) {
        console.log("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  const navigateToEditTask = (taskId) => {
    navigation.navigate("EditTask", { taskId });
  };

  return (
    <View style={Styles.body}>
      <Header title="Tarefas" />
      {tasks.map((task) => (
        <View key={task.id} style={Styles.container}>
          <View style={Styles.taskheader}>
            <Text style={Styles.titlesmall}>{task.name}</Text>
          </View>
          <View style={Styles.taskbody}>
            <Text>{task.description}</Text>
          </View>
          <TouchableOpacity onPress={() => navigateToEditTask(task.id)} style={Styles.del}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTask(task.id)} style={Styles.del}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}