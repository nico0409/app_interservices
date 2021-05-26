import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Text ,View } from 'react-native';
import { Navigator } from './src/Navigation/Navigator';
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/Navigation/MenuLateral';
import { ProductsProvider } from './src/context/ProductsContexts';


const AppState=({children}:{children:JSX.Element|JSX.Element[]})=>{
return(
  <AuthProvider>
    <ProductsProvider>
      {children}
    </ProductsProvider>
  </AuthProvider>
)
}
 const App = () => {
  return (
    <NavigationContainer independent={true}>
      <AppState>
       
      <Navigator/>
     
      </AppState>
   </NavigationContainer>
  )
 
}
export default App