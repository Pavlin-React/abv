import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AuthStack from './src/navigation/AuthStack'
import AppStack from './src/navigation/AppStack'

let App = () => {
  return(
    <NavigationContainer>
      <AppStack/>
      {/* <AuthStack/> */}
    </NavigationContainer>
  )
}




export default App;
