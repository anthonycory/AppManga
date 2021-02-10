import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Stacknavigator from './components/navigation/Stacknavigator'
import Authnavigator from './components/navigation/Authnavigator'


export default function App() {

  const [user, setUser] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      User()
      console.log("Update")
    }, 500);
},)

   const User = async() => {
    const value = await AsyncStorage.getItem('@user')
    if (value === null) {
      console.log('disconnecte')
    }else {
      setUser(true)
      console.log("online")
      navigation.navigate('Tabnavigator')
    }
  }

    return (
      <NavigationContainer>
        {user === false ? <Authnavigator/> : <Stacknavigator /> }
     </NavigationContainer>
    )
}

// const removeValue = async () => {
//   try {
//     await AsyncStorage.removeItem('@user')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Done.')
// }

// removeValue()