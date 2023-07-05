import React, { useEffect, useState } from "react";
import {  TextInput, View } from "react-native";
import { Button,} from "react-native-paper"
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function EditTask ({ navigation, route }){
  const { taskId } = route.params;
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const taskRef = doc(db, "tasks", taskId);
      const taskSnapshot = await taskRef.get;

      if (taskSnapshot.exists()) {
        const taskData = taskSnapshot.data();
        setName(taskData.name);
        setDesc(taskData.description);
      } else {
      }
    };

    fetchTask();
  }, []);

  const handleSave = async () => {
    const taskRef = doc(db, "Tasks", taskId);
    await setDoc(taskRef, {
      name: name,
      description: description,
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Título da Tarefa"
      />
      <TextInput
        value={description}
        onChangeText={setDesc}
        placeholder="Conteúdo da Tarefa"
        multiline
      />
      <Button
      mode="contained" 
      onPress={handleSave} 
      buttonColor="#8A02F2"
      textColor="#fff"
      > Salvar </Button>
    </View>
  );
};

// export default EditTask;