import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { Styles } from "../utils/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";

export default function EditTask({ navigation, route }) {
  const { taskId } = route.params;
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const taskRef = doc(db, "tasks", taskId);
      const taskSnapshot = await taskRef.get();

      if (taskSnapshot.exists()) {
        const taskData = taskSnapshot.data();
        setName(taskData.name);
        setDesc(taskData.description);
      } else {
        console.log("Task does not exist");
      }
    };
    fetchTask();
  }, [taskId]);

  const handleSave = async () => {
    if (!name || !description) {
      alert("Por favor, insira um nome e uma descrição para a tarefa.");
      return;
    }
    const taskRef = doc(db, "tasks", taskId);
    await setDoc(taskRef, {
      name: name,
      description: description,
    });
    navigation.goBack();
  };

  return (
    <View style={Styles.body}>
      <Header title="Editar Tarefa" />
      <Paragraph style={Styles.inputtitle}>Nome/Título</Paragraph>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Título da Tarefa"
        style={Styles.textinput}
      />
      <Paragraph style={Styles.inputtitle}>Descrição</Paragraph>
      <TextInput
        value={description}
        onChangeText={setDesc}
        placeholder="Conteúdo da Tarefa"
        multiline
        style={Styles.textinput}
      />
      <Button mode="contained" onPress={handleSave} style={Styles.button} icon={() => <Icon name="check" size={15} color="#fff" />}>
        Salvar
      </Button>
    </View>
  );
}
