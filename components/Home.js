import { NavigationContainer } from '@react-navigation/native'
import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View,StatusBar, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import colors from '../assets/colors/colors'
import Data from '../Data'
import Categorie from '../Categorie'
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
    const [Select, setSelect] = useState(0)
    const [categorie, setCategorie] = useState('Action')
    const [liked, setLiked] = useState(["0"])
    const [deletelike, setDeletelike] = useState([])

    const arr = []

    useEffect(()=> {
        console.log('liked',liked);  
        console.log(deletelike)  
    }, [liked, deletelike])

    const AddLike = (item) => {
        if (liked.indexOf(item) === -1) {
            const newArr = [...liked]
            newArr.push(item)
            setLiked(newArr)
        }
    }

    const Removelike = (item) => {
        const deletedArr = liked
        const id = deletedArr.indexOf(item)
        setDeletelike([item])
        deletedArr.splice(id, 1)
        setLiked(deletedArr)
    }



const likee = (item) => {
    if (liked.length <= 0) {
        return (
                <TouchableOpacity onPress={() => AddLike(item)}>      
                    <FontAwesome style={{marginLeft: 20}} name="heart" size={20} color="white" />
                </TouchableOpacity>
        )
    }else if (liked.indexOf(item) === -1) {
                return (
                <TouchableOpacity onPress={() => AddLike(item)}>      
                    <FontAwesome style={{marginLeft: 20}} name="heart" size={20} color="white" />
                </TouchableOpacity>
                )
            }else if (liked.indexOf(item) >= 0) {
                return (
                <TouchableOpacity onPress={() => Removelike(item)}>      
                    <FontAwesome style={{marginLeft: 20}} name="heart" size={20} color="red" />
                </TouchableOpacity>
                )
            }
}


    const RenderHeader = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>

                <FontAwesome name="bars" size={25} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    const RenderPopulaire = () => {
        return (
            <View style={styles.Renderpopulaire}>
                <Text style={styles.titlepopulaire}>Populaire {liked}</Text>
                <FlatList
                data={Data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', {item: Data[item.key]})}>
                        <ImageBackground source={{ uri : item.img}} style={styles.imagepopulaire} imageStyle={{borderRadius: 10}}>
                            <View style={styles.viewtitlemanga}>
                                <Text style={styles.titlemanga}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                />
            </View>
        )
    }

    const RenderCategorie = () => {

        const getid = (id, categorie) => {
            setSelect(id)
            setCategorie(categorie)
        }

        return (
            <View style={{height: 70, width: '100%'}}>
                <FlatList
                data={Categorie}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => getid(item.id, item.title)} style={{marginLeft: 10,alignItems: 'center',justifyContent: 'center', marginTop: 20, height: 35,paddingLeft: 10,paddingRight: 10,borderRadius:5, backgroundColor: item.id !== Select ? "rgba(252, 252, 252, 0.0)" : colors.black }}>
                        <Text style={{textTransform: 'uppercase', fontWeight: 'bold',color: item.id !== Select ? 'rgba(255, 255, 255, 0.5)' : colors.white}}>{item.title}</Text>
                    </TouchableOpacity>
                )} />
            </View>
        )
    }

    const RenderManga = () => {
        return (
            <View style={{width: '100%', marginBottom: 290}}>
                <FlatList 
                data={Data.filter(datas => datas.genre == categorie)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <View style={{flexDirection: 'row', paddingBottom: 20, width: '75%'}}>
                            <View>
                                <Image style={styles.categorieimg} source={{uri : item.img}} />
                            </View>
                            <View style={{width: '85%'}}>
                                <Text style={{color: colors.white, marginLeft: 10, textTransform: 'uppercase', fontWeight: 'bold'}}>{item.title}</Text>
                                <Text style={{color: colors.white,marginTop: 20,fontSize: 12, marginLeft: 10}}>{item.synopsis.substr(0, 150) + '...'}</Text>
                                
                                <View style={{bottom: 0,width: '100%', position: 'absolute', alignItems: 'flex-end'}}>

                                                   
                                {likee(item.key)}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
       
            <StatusBar hidden={false}/>
            {/* Header */}
            {RenderHeader()}

            {/* Populaire */}
            {RenderPopulaire()}

            {/* Catégorie */}
            {RenderCategorie()}

            {/* Manga */}
            {RenderManga()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        width: '90%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textwelcome: {
        color: colors.white,
        marginLeft: 10
    },
    userpicture: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    populaire: {
        flexDirection: 'column',
        marginTop: 10    
    },
    imagepopulaire: {
        width: 180,
        height: 130,
        borderRadius: 20,
        marginLeft: 10
      },
      titlepopulaire: {
          marginLeft: 10,
          color: colors.white,
          textTransform: 'uppercase',
          marginBottom: 10,
      },
      titlemanga: {
          textTransform: 'uppercase',
          color: colors.white
      },
      viewtitlemanga: {
        bottom: 0, 
        position: 'absolute', 
        backgroundColor: colors.black, 
        width: '100%', 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      Renderpopulaire: {
          height: 160
      },
      categorieimg : {
        width: 120,
        height: 180,
        borderRadius: 10,
        resizeMode: 'cover',
        marginLeft: 10
    }
})
