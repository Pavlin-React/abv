import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
