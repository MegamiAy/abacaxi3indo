import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
import EditTask from "./screens/EditTask";
import Task from "./components/Task";



const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                activeColor="red"
                shifting={true}
                barStyle={{ backgroundColor: "#000" }}
            >
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
                <Stack.Screen 
                name="Tarefas" 
                component={Task} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-list" color={color} size={26} />
                    ),
                }}/>
                <Stack.Screen 
                name="Adição" 
                component={AddTask} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}/>
                <Stack.Screen 
                name="Edição" 
                component={EditTask} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pencil" color={color} size={26} />
                    ),
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}