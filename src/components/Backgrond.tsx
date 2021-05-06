import React from 'react'
import { View, Animated, Image, useWindowDimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated'
import { colors } from '../theme/loginTheme'
import { UseAnimation } from '../hooks/UseAnimation';


export const Backgrond = () => {
    const{width,height}=useWindowDimensions();
    const {opacity,fadeIn,fadeOut} =UseAnimation(0,0.35)

   
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
                //top:100,
                width,
                height,

         

                opacity
            }}
            
            
        >
         <Image  source={require('../assets/istockphoto.jpg')}
            style={{
                
                width:width,
                height:height,
                
            }}
         /> 
        </Animated.View>
        </LinearGradient>
 
            
        
    )
}
