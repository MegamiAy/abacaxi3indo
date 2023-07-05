import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
import EditTask from "./screens/EditTask";
import TaskP from "./components/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
                    component={MyTab}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }} />
                <Stack.Screen
                    name="Task"
                    component={TaskP}

                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="view-list" color={color} size={26} />
                        ),

                    }} />
                <Stack.Screen
                    name="Adição"
                    component={AddTask}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="plus" color={color} size={26} />
                        ),
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createNativeStackNavigator();

function MyTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen name="Tarefas"
                component={TaskP}
                options={{
                    headerShown: false
                }} />
            <Tab.Screen name="Adição"
                component={AddTask}
                options={{
                    headerShown: false
                }} />
            <Tab.Screen name="EditTask"
                component={EditTask}
                options={{
                    headerShown: false
                }} />
        </Tab.Navigator>
    )
}