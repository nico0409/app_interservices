import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { color } from 'react-native-reanimated';

export const LoadingScreen = () => {
    return (
       <View
       style={{
           flex:1,
           justifyContent:'center',
           alignItems:'center'
           
       }}>
           <ActivityIndicator
           size={50}
           color="black"
           />
       </View>
    )
}
