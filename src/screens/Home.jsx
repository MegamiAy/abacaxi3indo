import React from "react";
import { View } from "react-native";
import { Styles } from "../utils/Styles";
import TaskP from "../components/Task";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  return (
    <View style={Styles.body}>
        <Text style={Styles.title}>App Tarefas</Text>
        <View style={Styles.container}>
          <View style={Styles.textDiv}>
            <Text style={Styles.titlesmall}>Para adicionar uma tarefa:</Text>
            <Text style={Styles.text}>Clique no botão <Icon name="plus" size={15} color="#fff" /> para ir à pagina de adicionar tarefas. Lá, forneça o título e a descrição da sua tarefa, e adicione ela.</Text>
          </View>
          <View style={Styles.textDiv}>
            <Text style={Styles.titlesmall}>Para listar as tarefas:</Text>
            <Text style={Styles.text}>Clique no botão <Icon name="list" size={15} color="#fff" /> para ir à pagina de tarefas. Nessa página, você poderá ver, editar e apagar suas tarefas pendentes.</Text>
          </View>
        </View>
      </View>
  );
}
