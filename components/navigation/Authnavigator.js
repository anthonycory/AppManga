import React from 'react'
import Login from '../Login'
import Home from '../Home'
import Stacknavigator from './Stacknavigator'
import { createStackNavigator } from '@react-navigation/stack';
import Tabnavigator from './Tabnavigator';

import Details from '../Details'

const AuthStack = createStackNavigator();


export default function Authnavigator() {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Tabnavigator" component={Tabnavigator} />
            <AuthStack.Screen name="Details" component={Details} />
        </AuthStack.Navigator>
    )
}