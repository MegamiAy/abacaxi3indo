import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Task from "../components/Task";


export default function Home() {
    

        return (
            <View>
                <Task/>
                <Button
                    icon={() => <Icon name="rocket" size={30} color="#000" />}
                    mode="contained"
                    onPress={() => console.log("Button pressed")} 
                >
                    ME APERTE
                </Button>
            </View>
        );
    }
