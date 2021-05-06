import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Text ,View } from 'react-native';
import { Navigator } from './src/Navigation/Navigator';

 const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
   </NavigationContainer>
  )
 
}
export default App