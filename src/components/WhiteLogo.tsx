import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
    return (
        <View style={{ marginVertical:20}}>
            <Image 
            source={require('../assets/i-ima_v-full_color-light-es-1024h.png')}
            style={{
                width:145,
                height:152,
            }}

            />   
            
        </View>
    )
}
