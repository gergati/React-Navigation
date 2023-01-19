import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home'
import Profile from "../screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "../constants/colors";

const MyTab = createBottomTabNavigator();

export default function MyBottomTab(){
    return (
        <MyTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: Colors.secondary
            }}
        >
            <MyTab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => <FontAwesome name="home" size={30} color={color} />
                }}
            />
            <MyTab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {backgroundColor: 'green', color: Colors.ligth},
                    tabBarIcon: ({color}) => <FontAwesome name="user" size={30} color={color} />
                }}
            />
        </MyTab.Navigator>
    )
}