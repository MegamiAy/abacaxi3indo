import { Paragraph, TextInput } from "react-native-paper";
import { Text, View } from "react-native";

export default function AddTask() {
    return (
        <View>
            <Text>Adicionar Tarefa</Text>
            <Paragraph>Nome/Título</Paragraph>
            <TextInput
                placeholder="Insira o Nome"
            />
            <Paragraph>Descrição</Paragraph>
            <TextInput
                placeholder="Insira a Descrição"
            />
        </View>
    )
}