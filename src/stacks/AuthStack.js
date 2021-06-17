import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import MainDrawer from '../stacks/MainDrawer';

import colors from '../theme/colors';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.background,
            }
        }}>
            <Stack.Screen
                name="PreloadScreen"
                component={PreloadScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="ChoosePropertyScreen"
                component={ChoosePropertyScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainDrawer"
                component={MainDrawer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};