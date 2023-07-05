import { Button, Paragraph, TextInput } from "react-native-paper";
import { Text, View } from "react-native";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";
import { Styles } from "../utils/Styles";
import Header from "../components/Header";

export default function AddTask({navigation}) {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleAddTask = async () => {
        if (!taskName || !taskDescription) {
            alert("Por favor, insira um nome e uma descrição para a tarefa.");
            return;
        } try {
            const taskRef = await addDoc(collection(db, "tasks"), {
                name: taskName,
                description: taskDescription,
            });
            console.log("Task added with ID:", taskRef.id);
            setTaskName("");
            setTaskDescription("");
            navigation.navigate("Task")
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <View style={Styles.body}>
            <Header title="Adicionar tarefa" />
            <Paragraph style={Styles.inputtitle}>Nome/Título</Paragraph>
            <TextInput
                placeholder="Insira o Nome"
                value={taskName}
                onChangeText={text => setTaskName(text)}
                style={Styles.textinput}
            />
            <Paragraph style={Styles.inputtitle}>Descrição</Paragraph>
            <TextInput
                placeholder="Insira a Descrição"
                value={taskDescription}
                onChangeText={text => setTaskDescription(text)}
                style={Styles.textinput}
                multiline
            />
            <Button
                icon={() => <Icon name="plus" size={15} color="#fff" />}
                mode="contained"
                onPress={handleAddTask}
                style={Styles.button}
            >
                ADICIONAR
            </Button>

        </View>
    )
}