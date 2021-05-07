import React, {useContext, useState,useEffect} from 'react'
import { Text,TextInput,TouchableOpacity, View, KeyboardAvoidingView, Animated, Keyboard, Platform, ToastAndroid,ScrollView, Alert } from 'react-native';
import { Backgrond } from '../components/Backgrond';
import { WhiteLogo } from '../components/WhiteLogo';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/loginTheme';



import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/UseForm';
import { UseAnimation } from '../hooks/UseAnimation';
import { types } from '@babel/core';
import { AuthContext } from '../context/AuthContext';



interface Props extends StackScreenProps<any,any>{}



export const RegisterScreen = ({navigation}:Props) => {
    const {opacity,fadeIn} =UseAnimation(0);
    const {username:nombre,password,confirmPassword,email:correo,onChange}=useForm({
        username:'',
        password:'',
        email:'',
        confirmPassword:'',
    });
    const [secureTextEntry, setsecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmsSecureTextEntry] = useState(true);
    const {signUp,signIn,errorMessage,removeError} = useContext(AuthContext)

    
    useEffect(() => {
        if(errorMessage.length===0) return  
        Alert.alert('Registro incorrect ',errorMessage,[{text:'ok',onPress:removeError}]);

    }, [errorMessage])
    const showPasword=(type:string)=>{
      
       
        if  (type==='password') 
        {
            setsecureTextEntry(!secureTextEntry) 
                setTimeout(() => {
                    setsecureTextEntry(secureTextEntry)
                 
                      }, 1000)
        }else{
            setConfirmsSecureTextEntry(!confirmSecureTextEntry) 
                setTimeout(() => {
                    setConfirmsSecureTextEntry(confirmSecureTextEntry)
                 
                      }, 1000)
         }
        
    }


  
          
        fadeIn();

    const onRegister=()=>{
        signUp({nombre,correo,password})
        signIn({correo,password})
        console.log({nombre,password});
        Keyboard.dismiss();

        
    }
   

    return (
         
        <View style={{
            backgroundColor:'white',
            flex:1
        }}>
             
             {/* background  */}
                 <Backgrond srcImg="../assets/register.jpg"/> 
             {/* keyboard avoid view */}
            
           
                 <Animated.View style={{flex:1,opacity,justifyContent:'center'}}>
                     
                 <KeyboardAvoidingView 
                      style={styles.animatedContainer} 
                     behavior={(Platform.OS=='ios')?'padding':'height'} 
                     >
                      
                    
                     <WhiteLogo />  
                     <TextInput
                     placeholder="email"
                     placeholderTextColor= 'rgba(0,0,0,0.6)'
                     keyboardType="default"
                     style={styles.imputStyle}
                     selectionColor="white"  
                     autoCorrect
                     autoCapitalize="none"
                     textContentType="emailAddress"
                     onChangeText={(value)=>onChange(value,"email")}
                     value={correo}
                     onSubmitEditing={onRegister}
                     />
                     <TextInput
                     placeholder="User name"
                     placeholderTextColor= 'rgba(0,0,0,0.6)'
                     keyboardType="default"
                     style={styles.imputStyle}
                     selectionColor="white"  
                     autoCorrect={false}
                     autoCapitalize="none"
                     textContentType="username"
                     onChangeText={(value)=>onChange(value,"username")}
                     value={nombre}
                     onSubmitEditing={onRegister}
                     />
                      <View style={styles.containerInput}>
                         <TextInput
                         placeholder="Password"
                         placeholderTextColor='rgba(0,0,0,0.6)'
                         style={styles.imputStyle}
                         secureTextEntry={secureTextEntry}
                         textContentType="password"
                         autoCompleteType="password"
                         onChangeText={(value)=>onChange(value,"password")}
                         value={password}
                         onSubmitEditing={onRegister}
                         />
                         <View style={{right:'5%',position:'absolute'}}>
                             <TouchableOpacity onPress={()=>showPasword('password')}>
                                 <Icon
                                 name="eye-outline" 
                                 size={25}
                                 color='rgba(0,0,0,0.6)'
                                 />
                             </TouchableOpacity>
                         </View>
 
                     </View>
                     <View style={styles.containerInput}>
                         <TextInput
                         placeholder="Confirm Password"
                         placeholderTextColor='rgba(0,0,0,0.6)'
                         style={styles.imputStyle}
                         secureTextEntry={confirmSecureTextEntry}
                         textContentType="password"
                         autoCompleteType="password"
                         onChangeText={(value)=>onChange(value,"confirmPassword")}
                         value={confirmPassword}
                         onSubmitEditing={onRegister}
                         />
                         <View style={{right:'5%',position:'absolute'}}>
                             <TouchableOpacity 
                             onPress={()=>showPasword('confirmPassword')}
                             >
                                 <Icon
                                 name="eye-outline" 
                                 size={25}
                                 color='rgba(0,0,0,0.6)'
                                 />
                             </TouchableOpacity>
                         </View>
 
                     </View>
                     
 
                     <View style={styles.butonContainer}>
                         <TouchableOpacity activeOpacity={0.3}
                             style={styles.button}
                             onPress={onRegister}
                         >
                             <Text style={styles.buttonText}>
                             Register
                             </Text>
                         </TouchableOpacity>
                     </View>
                    
                     <View style={{left:'5%',top:'8%',position:'absolute',marginTop:20}}>
                             <TouchableOpacity onPress={()=>{navigation.replace("LoginScreen")
                             ;}
                            }>
                                 <Icon
                                 name="chevron-back-outline" 
                                 size={32}
                                 color='rgba(0,0,0,0.6)'
                                 />
                             </TouchableOpacity>
                    </View>
                    
                    
                      </KeyboardAvoidingView> 
                      
                     </Animated.View>
                    
        
         </View>
        
     
    )
}
