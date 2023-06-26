import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
import EditTask from "./screens/EditTask";



const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Adição" component={AddTask} />
                <Stack.Screen name="Edição" component={EditTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}