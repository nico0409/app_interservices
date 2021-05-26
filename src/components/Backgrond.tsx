import React from 'react'
import { View, Animated, Image, useWindowDimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated'
import { colors } from '../theme/loginTheme'
import { UseAnimation } from '../hooks/UseAnimation';

interface Props{
    srcImg:string
}
export const Backgrond = ({srcImg}:Props) => {
    const{width,height}=useWindowDimensions();
    const {opacity,fadeIn,fadeOut} =UseAnimation(0,0.35);
    fadeIn();

    return (
        <LinearGradient 
                colors={['white' ,'red'   ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 4}}>  
                     <Animated.View
            style={{
                position:'absolute',
                backgroundColor:'white',
                width,
                height,

         

                opacity
            }}

            
        >
         <Image 
         source={
             srcImg==="../assets/istockphoto.jpg"?require('../assets/istockphoto.jpg'):require('../assets/register.jpg')
         } 
            style={{
                
                width:width,
                height:height,
                
            }}
         /> 
        </Animated.View>
        </LinearGradient>
 
            
        
    )
}
