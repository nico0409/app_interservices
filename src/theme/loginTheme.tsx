import { StyleSheet } from "react-native";
import { color } from 'react-native-reanimated';


export const styles = StyleSheet.create({
    
    imputStyle:{
        borderWidth:1,
        height:50,
        width:300,
        paddingHorizontal:10,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.3)',
        marginVertical:10,
        color:'rgba(0,0,0,0.7)',
        //fontWeight:'bold',
        fontSize:14
        
        
        
    },
    butonContainer:{
        alignItems:"center",
        marginTop:20,
        
        

    },
    button:{
        borderWidth:2,
        borderColor:'rgba(0,0,0,0.2)',
        paddingHorizontal :20,
        paddingVertical:5,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.3)'
        
        

    },
   buttonText:{
       fontSize:16,
       color:'rgba(0,0,0,0.6)'
   },
   animatedContainer:{
       flex:1,
        justifyContent:'center',
       alignItems:'center',
       top:'-8%'
       
   },
   textGetPassword:{
       textDecorationLine: 'underline',
       fontStyle: 'italic',
       fontWeight: '400'
    },
    containerInput:{
        flexDirection:'row',
    
        alignItems:'center'
        
        

    }
    
});


export const  colors={

fondo:'red'

}