import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { ProtecterScreen } from '../screens/ProtecterScreen';
import {  RegisterScreen } from '../screens/RegisterScreen';




const Stack = createStackNavigator();

export const Navigator=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    
    }}
    >
    {/*   <Stack.Screen name="FadeInImage" component={FadeScreen} /> */} 
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProtecterScreen" component={ProtecterScreen} /> 
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 

    </Stack.Navigator>
  );
}