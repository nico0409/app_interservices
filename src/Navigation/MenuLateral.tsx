import React from 'react';
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text,  useWindowDimensions, View, TouchableOpacity,FlatList, Button, Alert } from 'react-native';
import { Tabs} from './Tabs';
import { styless, styles } from '../theme/appTheme';

import { menuItems } from '../data/MenuItems';

import { ItemSeparator } from '../components/ItemSeparator';
import { FlatLIstMenuItem } from '../components/FlatLIstMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { SlidesScreen } from '../screens/SlideScreen';
import { HomeScreen } from '../screens/HomeScreen';
import  Icon  from 'react-native-vector-icons/Ionicons';
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
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen'; */
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from '../../../peliculasAPP/src/navigation/Navigation';
import { Navigator } from './Navigator';



const Drawer = createDrawerNavigator();

  export const  MenuLateral=()=> {

    const{width}=useWindowDimensions();

   
  return (
    <NavigationContainer independent={true}
    >
    <Drawer.Navigator
      //drawerPosition=""
      drawerType={width>=600 ? "permanent" : "front"} 
      
      drawerContent={(props:any)=><MenuInterno {...props}/>}
    
    >
      {/* <Drawer.Screen name="StackNavigator"  component={StackNavigator} /> */}
      
      <Drawer.Screen name="Tabs" component={Tabs} options={{headerRight:() => (
            <Button
              onPress={() => ()=>{}}
              title="Info"
              color="#fff"/>)}}></Drawer.Screen>
        <Drawer.Screen name="SlidesScreen" component={SlidesScreen}/>
         <Drawer.Screen name="HomeScreen" component={HomeScreen} />
       
      {/*  <Drawer.Screen name="Animation102Scren" component={Animation102Scren} />
        <Drawer.Screen name="Animation101Scren" component={Animation101Scren}/>
        <Drawer.Screen name="SwitchScreen" component={SwitchScreen}/>
        <Drawer.Screen name="AlertScreen" component={AlertScreen}/>
        <Drawer.Screen name="TextImputScren" component={TextImputScren}/>
        <Drawer.Screen name="PullToRefreshScreen" component={PullToRefreshScreen}/>
        <Drawer.Screen name="CustomSectionListScreen" component={CustomSectionListScreen}/>
        <Drawer.Screen name="ModalScreen" component={ModalScreen}/>
        <Drawer.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen}/>
        <Drawer.Screen name="ChangeThemeScreen" component={ChangeThemeScreen}/> */}

     {/*  <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} /> */}
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


const MenuInterno=({navigation}: DrawerContentComponentProps<DrawerContentOptions>)=>{

  return(
   
       <DrawerContentScrollView > 
        {/**contenedor de avatar */}
          <View style={{...styless.avatarContainer ,marginVertical:20,marginBottom:40}}>
            <Image
            source={{
             // uri:'https://www.presentationpro.com/images/product/medium/slide/PPP_IFlat_LT3_Flat_Avatar_Placeholder_01_Circle.jpg'
             uri:'https://www.webconsultas.com/sites/default/files/styles/foto_autor_pagina/public/autores/vanessa-fernandez.jpg'
            }}
            
            style={styless.avatar}
            />
        </View>
           {/* <View style={styless.menuContainer}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('StackNavigator')}
                style={styless.menuBoton}
              >
              <Icon name={'arrow-forward'} size={30} color={'black'} />
              <Text style={styless.menuTexto}>
                  Navegacion
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
               onPress={()=>navigation.navigate('SettingsScreen')}
              style={styless.menuBoton}
            >
                <Icon name={'cog-outline'} size={30} color={'black'} />
                <Text style={styless.menuTexto}>Ajustes</Text>
              </TouchableOpacity>

            </View>  */}
         <View style={{flex:1,...styles.globalMargin}}>
          
           <FlatList
          data={menuItems}
          //data que se quiere iterar
          renderItem={({item})=> <FlatLIstMenuItem menuItem={item} navigation={navigation}/>}
          //funcion para renderizar cada elemento
          keyExtractor={(item)=>item.name}
          //ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú"></HeaderTitle>}
          //ListFooterComponent={() => renderListHeader()}
          ItemSeparatorComponent={()=><ItemSeparator/>}
          /> 
          
          
        </View>    
          
       </DrawerContentScrollView>  
     
  );
}
