import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { styless } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useNavigationState } from '@react-navigation/core';
import { Navigation } from '../../../peliculasAPP/src/navigation/Navigation';
import { SlideNews } from './SlideNews';
import { ScrollView } from 'react-native-gesture-handler';
;

interface Props extends DrawerScreenProps <any,any>{}

export const Tab1Screen = ({navigation}: Props) => {
console.log(navigation.setOptions);
console.log('entre');



 
 /*     useEffect(() => {
    navigation.setOptions({
                headerLeft : () => (
                    <TouchableOpacity style={styless.menuBoton}
                    onPress={()=>{navigation.toggleDrawer()}}
                    >
                        { <Icon name={'menu'} size={40} color={'black'}  style={{marginLeft:20}}/> }
                        <Button title="pulse" onPress={()=>{}}/>r
                    </TouchableOpacity>
                )
            })
        }, [])   
  */
    return (
      /*   <ScrollView style={{...styless.globalMargin,flex:1}}> */
        <View style={{...styless.globalMargin,flex:1}}>
           
                <View style={{flex:3}}>
                    <SlideNews/>
                </View>
                <View style={{flex:1}}>
                

                </View>

           
        </View>
    
    )
}
