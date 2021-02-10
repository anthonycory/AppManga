import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons'; 
//SCREEN
import Home from '../Home'
import Favorie from '../Favorie'
import Search from '../Search'

export default function Tabnavigator() {
    return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#6D6D6D"
    barStyle={{ backgroundColor: '#171717' }}
    >
        <Tab.Screen name="Home" component={Home} options= {{
            tabBarIcon: ({ color }) => (
                <FontAwesome name="home" size={20} color={(color)} />
            )
        }} />
        <Tab.Screen name="Recherche" component={Search} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="search" size={20} color={(color)} />
            )
        }} />
        <Tab.Screen name="Favorie" component={Favorie} options={{
            tabBarIcon: ({color}) => (
                <FontAwesome name="star" size={20} color={(color)} />
            )
        }}/>
    </Tab.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();
