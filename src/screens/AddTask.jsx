import { Button, Paragraph, TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import db from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";


export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleAddTask = async () => {
        try {
            const taskRef = await db.collection("tasks").add({
                name: taskName,
                description: taskDescription,
            });
            console.log("Task added with ID:", taskRef.id);
            setTaskName("");
            setTaskDescription("");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <View>
            <Text>Adicionar Tarefa</Text>
            <Paragraph>Nome/Título</Paragraph>
            <TextInput
                placeholder="Insira o Nome"
                value={taskName}
                onChangeText={text => setTaskName(text)}
            />
            <Paragraph>Descrição</Paragraph>
            <TextInput
                placeholder="Insira a Descrição"
                value={taskDescription}
                onChangeText={text => setTaskDescription(text)}
            />
            <Button
                icon={() => <Icon name="plus" size={30} color="#000" />}
                mode="contained"
                onPress={handleAddTask}
            >
                ADICIONAR
            </Button>

        </View>
    )
}