import { Button, Paragraph, TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";
import { Styles } from "../utils/Styles";

export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleAddTask = async () => {
        try {
            const taskRef = await setDoc(collection(db, "tasks"), {
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
        <View style={Styles.body}>
            <Text>Editar Tarefa</Text>
            <Paragraph>Nome/Título</Paragraph>
            <TextInput
                placeholder="Insira a mudança"
                value={taskName}
                onChangeText={text => setTaskName(text)}
            />
            <Paragraph>Descrição</Paragraph>
            <TextInput
                placeholder="Insira a mudança"
                value={taskDescription}
                onChangeText={text => setTaskDescription(text)}
            />
            <Button
                icon={() => <Icon name="pencil" size={15} color="#000" />}
                mode="contained"
                onPress={handleAddTask}
            >
                ADICIONAR
            </Button>

        </View>
    )
}