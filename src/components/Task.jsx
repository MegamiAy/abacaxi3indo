import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "./Header";

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

  return (
    <View>
        <Header title="Tarefas"/>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>Titulo: {task.name}</Text>
          <Text>Descrição: {task.description}</Text>
        </View>
      ))}
    </View>
  );
}