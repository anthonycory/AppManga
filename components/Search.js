import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ImageBackground } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../assets/colors/colors'
import Data from '../Data'
import { FontAwesome } from '@expo/vector-icons'; 
import { color } from 'react-native-reanimated'


export default function Search() {
    const w = window.innerWidth;
    var h = window.innerHeight;
    const [result, setResult] = useState('')

    const RenderSearch = () => {
        return(
            <View style={{alignItems: 'center', marginBottom: 10,}}>
                <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor: colors.white, width: '95%',borderRadius: 5,marginTop: 20, height: 50,}}>

                <FontAwesome style={{marginLeft: 20}} name="search" size={20} color="#777373" />
                <TextInput style={{marginLeft: 10}}  onChangeText={(value) => setResult(value.toLowerCase())} placeholder="recherche" />
                </View>
            </View>
        )
    }

    const filterData = Data.filter((item) => {
        return item.title.toLowerCase().indexOf(result) >= 0
    })

    const RenderResultSearch = () => {
        return (
            <View style={{width: '100%', marginBottom: 0, flex: 1}}>
                <FlatList 
                data={filterData}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <ImageBackground style={styles.categorieimg} imageStyle={{borderRadius: 10}} source={{uri : item.img}} >  
                        <View style={{backgroundColor: colors.black, padding: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                             <Text style={{textAlign: "center", color: "white"}}>{item.title}</Text>
                        </View>              
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
       
        <StatusBar hidden={false}/>

        {/* Search */}
        {RenderSearch()}

        {/* Result Search */}
        {RenderResultSearch()}

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange
    },
    categorieimg : {
        width: 180,
        height: 250,
        borderRadius: 10,
        resizeMode: 'cover',
        marginLeft: 10,
        marginBottom: 10,
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5
    }
})
