import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Homepagetwo from "./Component/Homepage";
import Details from "./Component/Details";
import Tab from "./Component/Tab";
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Homepagetwo}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})