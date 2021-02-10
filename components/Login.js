import React, { useState } from 'react'
import { StyleSheet,KeyboardAvoidingView, TouchableWithoutFeedback, Text, View, Image, Button } from 'react-native'
import colors from '../assets/colors/colors'
import Swiper from 'react-native-swiper'
import Data from '../Data'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {

    const RenderSwiper = () => {
        return (
            <View style={styles.swiper}>
                <Swiper
                style={styles.wrapper}
                showsButtons={true}
                autoplay={true}
                showsButtons={false}
                autoplayTimeout={3.5}
                showsPagination={false}>
                    {Data.map((item) => {
                        return (
                            <Image
                                key={item.key}
                                style={styles.swiperimg}
                                source={{
                                uri: item.img,
                                }}
                            />
                        )
                    })}
                </Swiper>
            </View>
        )
    }

    const RenderLogin = () => {

        const HandleSubmit = async() => {
            
                await AsyncStorage.setItem('@user', username)
                // navigation.navigate('Home')
                console.log("Connexion ok")
                navigation.navigate('Tabnavigator')
        }

        // A FINIIR LOGIN ASYNC 
        
        const [username, setusername] = useState('')
        const [password, setpassword] = useState('')

        return (
            <View style={styles.RenderLogin}>
                <View style={styles.login}>
                    <View style={styles.icon}>
                        <FontAwesome name="envelope" size={20} color="white" />
                    </View>
                    <TextInput style={{marginLeft: 10}} onChangeText={(value) => setusername(value)} placeholder="Votre adresse mail" />
                </View>

                <View style={styles.login}>
                    <View style={styles.icon}>
                        <FontAwesome name="lock" size={20} color="white" />
                    </View>
                    <TextInput style={{marginLeft: 10}} onChangeText={(value) => setpassword(value)} placeholder="Mot de passe" />
                </View>

                <View style={styles.containerbutton}>
                    <TouchableOpacity style={styles.loginbutton} onPress={() => HandleSubmit()}>
                        <Text style={{color: colors.white}}>Se connecter</Text>
                    </TouchableOpacity>
                    
    
                    <TouchableOpacity style={styles.registerbutton}>
                        <Text style={{color: colors.white}}>S'inscrire</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

            {/* SWIPER  */}
            {RenderSwiper()}

            {/* Login */}
            {RenderLogin()}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        flexDirection: 'column',
        alignItems: 'center',
    },
    swiper : {
        flex: 2,
        width: '100%',
    },
    RenderLogin : {
        flex: 4,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
    },
    swiperimg: {
        width: '100%',
        height: '100%'
    },
    login: {
        backgroundColor: colors.white,
        width: '90%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    }, 
    icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        backgroundColor: colors.orange,
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    loginbutton : {
        width: '100%',
        height: 50,
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    registerbutton : {
        width: '100%',
        height: 50,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    containerbutton: {
        marginTop: 20,
        width: '90%',
        height: 120,
        justifyContent: 'space-between',
        flexDirection: 'column',
    }
})
