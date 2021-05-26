import React, {useContext, useState,useEffect}from 'react'
import { Text, View, ScrollView, TextInput, Animated, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ToastAndroid, Keyboard } from 'react-native';
import { Backgrond } from '../components/Backgrond';
import { WhiteLogo } from '../components/WhiteLogo';
import { UseAnimation } from '../hooks/UseAnimation';
import Icon from 'react-native-vector-icons/Ionicons'


import { styles } from '../theme/loginTheme';
import { color } from 'react-native-reanimated';
import { useForm } from '../hooks/UseForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({navigation}:Props) => {
    const {signIn,errorMessage,removeError} = useContext(AuthContext)

    const {opacity,fadeIn} =UseAnimation(0);
    const {username,password,email,onChange}=useForm({
        username:'',
        email:'',
        password:'',
    });

    useEffect(() => {
        if(errorMessage.length===0) return  
        Alert.alert('login incorrecto',errorMessage,[{text:'ok',onPress:removeError}]);

    }, [errorMessage])
    const [secureTextEntry, setsecureTextEntry] = useState(true)
  
    const showPasword=()=>{
        setsecureTextEntry(!secureTextEntry)
      
       setTimeout(() => {
        setsecureTextEntry(secureTextEntry)
     
          }, 1000)}
  
  
    fadeIn();

    const onLogin=()=>{
        
        Keyboard.dismiss();
        signIn({correo:email,password})
        
    }
    const onSignup=()=>{

    }
    
    return (
       <View style={{
           backgroundColor:'white',
           flex:1
       }}>
           
            {/* background  */}
                <Backgrond srcImg="../assets/istockphoto.jpg" /> 
            {/* keyboard avoid view */}
            
                <Animated.View style={{flex:1,opacity}}>
                <KeyboardAvoidingView 
                    style={styles.animatedContainer}
                    behavior={(Platform.OS=='ios')?'padding':'height'} 
                    >
                    <WhiteLogo />  
                    
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor= 'rgba(0,0,0,0.6)'
                    keyboardType="default"
                    style={styles.imputStyle}
                    selectionColor="white"  
                    autoCorrect={false}
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    onChangeText={(value)=>onChange(value,"email")}
                    value={email}
                    onSubmitEditing={onLogin}
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
                        onSubmitEditing={onLogin}
                        />
                        <View style={{right:'5%',position:'absolute'}}>
                            <TouchableOpacity onPress={()=>showPasword()}>
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
                            onPress={onLogin}
                        >
                            <Text style={styles.buttonText}>
                            Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.butonContainer}>
                        <TouchableOpacity activeOpacity={0.3}
                            style={styles.button}
                            onPress={()=>navigation.replace('RegisterScreen')}
                        >
                            <Text style={styles.buttonText}>
                            Sing up 
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{top:'5%'}} activeOpacity={0.3}
                    onPress={()=>{ToastAndroid.show("Revise su correo electornico",3)}}>
                    <View >
                        <Text style={styles.textGetPassword}>Recupaerar contraseña</Text>
                     </View>
                     </TouchableOpacity>
                     </KeyboardAvoidingView> 
                    </Animated.View>
           
       
        </View>
     
    )
}
