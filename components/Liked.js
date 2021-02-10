import React, { Component } from 'react'
import { StyleSheet, Text, View,StatusBar, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'

export default class liked extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <View>
               <Text>{this.props.key}</Text>
            </View>
        )
    }
}
