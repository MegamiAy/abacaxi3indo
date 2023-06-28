import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Paragraph } from "react-native-paper";
import { db } from "../config/firebase";
// import { db, collection, getDocs } from "./config/firebase";

export default function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "task"));
        const taskData = querySnapshot.docs.map((doc) => doc.data());
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <View>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>Título: {task.name}</Text>
          <Paragraph>Descrição: {task.description}</Paragraph>
        </View>
      ))}
    </View>
  );
}