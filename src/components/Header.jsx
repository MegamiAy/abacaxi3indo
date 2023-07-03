import { Text, View } from "react-native";
import { Styles } from "../utils/Styles";

export default function Header({ title }) {
    return (
        <View>
            <Text style={Styles.title}>{title}</Text>
        </View>
    )
}