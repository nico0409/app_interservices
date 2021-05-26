import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext,useEffect } from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { ProtecterScreen } from '../screens/ProtecterScreen';
import {  RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import SplashScreen from 'react-native-splash-screen'
import { SlidesScreen } from '../screens/SlideScreen';
import { MenuLateral } from './MenuLateral';






const Stack = createStackNavigator();

export const Navigator=()=> {
  useEffect(() => {
  
    SplashScreen.hide();
  }, [])
  const {status} = useContext(AuthContext);

  if(status==='checking') return <LoadingScreen/>
  
 
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    
    }}
    >
     { 
      (status!=='authenticated')
      ?(
          <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
          </>
      )
      :(
      <>
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen name="MenuLateral" component={MenuLateral} />
          <Stack.Screen name="ProtecterScreen" component={ProtecterScreen} /> 
         
      </>
      )
      }
    {/*   <Stack.Screen name="FadeInImage" component={FadeScreen} /> */} 
      
 
      

    </Stack.Navigator>
  );
}