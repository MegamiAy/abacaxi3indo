import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import Icon from "react-native-vector-icons/FontAwesome";



export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    async function handleAddTask() {
        try {
            const taskRef = collection(db, "tasks");
            const payload = {
                name: taskName,
                description: taskDescription,
            };
            const taski = await addDoc(taskRef, payload);
            console.log(taski);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <View>
            <Text>Adicionar Tarefa</Text>
            <Paragraph>Nome/Título</Paragraph>
            <TextInput
                placeholder="Insira o Nome"
                value={taskName}
                onChangeText={setTaskName} />
            <Paragraph>Descrição</Paragraph>
            <TextInput
                placeholder="Insira a Descrição"
                value={taskDescription}
                onChangeText={setTaskDescription}
            />
            <Button
                icon={() => <Icon name="plus" size={30} color="#000" />}
                mode="contained"
                onPress={handleAddTask}>ADICIONAR</Button>
        </View>
    );
}