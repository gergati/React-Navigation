import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";
import Settings from '../screens/Settings'
import MyBottomTab from "./MyBottomTab";

const HomeStack = createStackNavigator()

function CustomHeader({title}) {
    return (
        <View style={{
            height: 80,
            width: '100%',
            backgroundColor: Colors.secondary,
            padding: 10,
            justifyContent: 'flex-end',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.ligth
            }}>
                {title}
            </Text>
        </View>
    )
};

const myConfig = {
        headerShown: false,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        presentation: 'modal',
        /* header: ({navigation, route, options, back}) => <CustomHeader title={route.name}/> */
};

export default function MyStack() {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={myConfig}
        >
            <HomeStack.Screen name="Root" component={MyBottomTab} />
            <HomeStack.Group screenOptions={{headerShown: true}}>
                <HomeStack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerBackTitle: 'Home' }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}