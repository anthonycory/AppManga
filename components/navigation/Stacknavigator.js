import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Details from '../Details'
import Login from '../Login'
import Tabnavigator from './Tabnavigator'

const Stack = createStackNavigator();

export default function Stacknavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Tabnavigator" component={Tabnavigator} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
  )
}

