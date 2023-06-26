import { Paragraph, TextInput } from "react-native-paper";
import { View, Text } from "react-native";

export default function EditTask() {
    return (
        <View>
            <Text>Editar Tarefa</Text>
            <Paragraph>Editar o nome</Paragraph>
            <TextInput
                placeholder="Insira o novo nome"
            />
            <Paragraph>Editar a descrição</Paragraph>
            <TextInput
                placeholder="Insira a nova descrição"
            />
        </View>
    )
}