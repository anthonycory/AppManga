import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors'

export default function Details({navigation, route}) {

    const {item} = route.params;

    const RenderIMG = () => {
        return (
            <View>
                <ImageBackground source={{ uri : item.img}} style={styles.backgroundIMG}>
                    <View style={{height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0, 0.4)'}}>

                    </View>
                </ImageBackground>
            </View>
        )
    }

    const RenderDescription = () => {
        return (
            <View style={{marginTop: -20,borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: colors.orange}}>
                 <View style={{alignItems: 'center'}}>
                 <Text style={{fontWeight: 'bold', color: colors.white, marginTop: 20, textTransform: 'uppercase', fontSize: 15}}>{item.title}</Text>
                 </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}> 
        <StatusBar hidden={false}/>

        {/* RenderIMG */}
        {RenderIMG()}

        {/* RenderDescription */}
        {RenderDescription()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange
    },
    backgroundIMG: {
        width: '100%',
        height: 300,
        position: 'relative'
    }
})
