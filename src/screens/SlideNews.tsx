import React,{useContext, useState}  from 'react'
import { Dimensions, Image, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { items } from '../data/NewsData';
import { Slide, MenuItem } from '../interfaces/appInterfaces';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { UseAnimation } from '../hooks/UseAnimation';
import { useNavigation } from '@react-navigation/core';
//import { ThemeContext } from '../Context/themeContext/ThemeContext';









export const SlideNews = () => {
    const {opacity,fadeIn,fadeOut} =UseAnimation(0)
    const [activIndex, setActivIndex] = useState (0 )
    const {height: screenHeight ,width : screenWidth}=Dimensions.get('window')
    const navigation= useNavigation();
    const [isVisible, setIsvisible] = useState(false)
   // const {theme:{colors}} = useContext(ThemeContext)  
    
    
   


    const renderItem=(item:Slide)=>{
       
         
        return  ( 
            <View style={{
                flex:1,
                backgroundColor:'white',
                borderRadius:5,
                padding:20,
                //justifyContent:'center',
                
                
            }}>
                <View style={{flex:4}}>
                <Image
                    source={item.img}
                    style={{
                        width:400,
                        height:300,
                        resizeMode:'cover',
                        
                    }}                    
                    />
                 </View>   
                 <View style={{flex:1}}>   
                <Text style={{
                    ...styles.titleNews,
                    color:'black'
                    
                    
                    }}>{item.title}</Text>
                <Text style={{
                    ...styles.subtitleNews,
                    color:'black'
                    }}>{item.desc}</Text>
                </View>
            </View>

        )
    }
    return (
     <SafeAreaView  
        style={{
            flex:1,
            backgroundColor:'white',
            //paddingTop:50
        }}>
         <Carousel
          //ref={(c) => { this._carousel = c; }}
          data={items}
          renderItem={({item}:{item:Slide})=>renderItem(item)}
          sliderWidth={screenWidth-40}
          
          itemWidth={screenWidth}
          layout="default"
          onSnapToItem={(index)=>{
            setActivIndex(index)
           index===items.length-1&&fadeIn()
           setIsvisible(true)
           
           
           
          }}
        />
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            marginHorizontal:20,
           // alignItems:'center'
           height:65,
           //backgroundColor:'red'
            }}>
            
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activIndex}
                dotStyle={{
                    width:15,
                    height:20,
                    borderRadius:10,
                    backgroundColor:'rgba(179,9,0,1)',
                    flex:1
                    
                    
                }}
                
            />
         </View>    
            
     </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5856d6'

    },
    subtitle:{
        fontSize:16
    },
    titleNews:{
        fontSize:20,
        fontWeight:'bold',
        color:'#5856d6'

    },
    subtitleNews:{
        fontSize:12
    },
    
});