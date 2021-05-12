import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

import { StackNavigator } from './StackNavigation';
//import { ThemeContext } from '../Context/themeContext/ThemeContext';
import { Theme, NavigationContainer } from '@react-navigation/native';
import { ProtecterScreen } from '../screens/ProtecterScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import chatBotScreen from '../screens/chatBotScreen';








export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS />
            : <TabsAndroid />
     // :<TabsIOS />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  //const {theme} = useContext(ThemeContext)
  return (
   
    <BottomTabAndroid.Navigator
    //theme={theme}
    barStyle={{ backgroundColor: 'rgba(153, 10, 10, 0.7)' }}
      sceneAnimationEnabled={ true }
    /*   barStyle={{
        backgroundColor: colors.primary
      }} */
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
            switch( route.name ) {
              case 'Tab1Screen':
                iconName = 'home-outline'
              break;

              case 'ProtecterScreen':
                iconName = 'chatbubble-ellipses-outline'
              break;
              case 'chatBotScreen':
                iconName = 'chatbubble-ellipses-outline'
              break;

             
            }

            return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Home' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="chatBotScreen" options={{ title: 'Chat' }} component={ chatBotScreen } />
     <BottomTabAndroid.Screen name="ProtecterScreen" options={{ title: 'Chat' }} component={ ProtecterScreen } /> 
    </BottomTabAndroid.Navigator>
  
  );
}






const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  //const {theme} = useContext(ThemeContext)
  
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
          backgroundColor: 'white'
        }}
        
        tabBarOptions={{
          activeTintColor: colors.primary,
          style: {
            borderTopColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
          },
          labelStyle: {
            fontSize: 15
          }
        }}
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {

            let iconName: string = '';
            switch( route.name ) {
              case 'Tab1Screen':
                iconName = 'bulb'
              break;

              case 'Tab2Screen':
                iconName = 'camera'
              break;

              case 'StackNavigator':
                iconName = 'cart'
              break;
            }

            return <Icon name={iconName} size={20} color={color} />
          }
        })}
      >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="ProtecterScreen" options={{ title: 'Stack' }} component={ ProtecterScreen } />

    </BottomTabIOS.Navigator>
  );
}

export const colors={
  primary:'#fdd835',
  secondary:'#1e88e5'
  
  
  };