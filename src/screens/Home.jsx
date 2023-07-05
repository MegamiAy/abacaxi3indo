import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Styles } from "../utils/Styles";
import Task from "../components/Task";

export default function Home() {
  return (
    <View style={Styles.body}>
        <Task />
      </View>
  );
}
