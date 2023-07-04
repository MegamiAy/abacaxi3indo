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
                activeColor="#fff"
                shifting={true}
                barStyle={{ backgroundColor: "#0D0D0D" }}
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