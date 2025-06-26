import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import Ejercicio1Screen from '../screens/Ejercicio1Screen';
import Ejercicio2Screen from '../screens/Ejercicio2Screen';
import Ejercicio3Screen from '../screens/Ejercicio3Screen';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Welcome}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='Tabs' component={MyTab} />
        </Stack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
function MyTab (){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Ejercicio1' component={Ejercicio1Screen}/>
            <Tab.Screen name='Ejercicio2' component={Ejercicio2Screen}/>
            <Tab.Screen name='Ejercicio3' component={Ejercicio3Screen}/>
        </Tab.Navigator>
    )
}

export default function BottomTab() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
