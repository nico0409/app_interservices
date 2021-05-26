import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* import { HomeScreen } from '../screens/HomeScreen';



import { Animation102Scren } from '../components/Animation102Scren';
import { Animation101Scren } from '../components/Animation101Scren';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextImputScren } from '../screens/TextImputScren';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen'; */
import { NavigationContainer } from '@react-navigation/native';





const Stack = createStackNavigator();

export const StackNavigator =()=> {



  return (
  /*   <NavigationContainer
    theme={theme}
    //theme={customThem}
    > */
      <Stack.Navigator
        screenOptions={
          {
            headerShown:false
          }
        }>
      {/*   <Stack.Screen name="SlidesScreen" component={SlidesScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation102Scren" component={Animation102Scren} />
        <Stack.Screen name="Animation101Scren" component={Animation101Scren}/>
        <Stack.Screen name="SwitchScreen" component={SwitchScreen}/>
        <Stack.Screen name="AlertScreen" component={AlertScreen}/>
        <Stack.Screen name="TextImputScren" component={TextImputScren}/>
        <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen}/>
        <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen}/>
        <Stack.Screen name="ModalScreen" component={ModalScreen}/>
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen}/>
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen}/> */}
      </Stack.Navigator>
   /*  </NavigationContainer> */
  );
}