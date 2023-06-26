import { View } from "react-native";
import { Paragraph } from "react-native-paper";

export default function Task(){
    return (
        <View>
            <Text>Título</Text>
            <Paragraph>Descrição: </Paragraph>
        </View>
    )
}