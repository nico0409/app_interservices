import React, {useState}from 'react'
import { Text, View, ScrollView, TextInput, Animated, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, ToastAndroid, Keyboard } from 'react-native';
import { Backgrond } from '../components/Backgrond';
import { WhiteLogo } from '../components/WhiteLogo';
import { UseAnimation } from '../hooks/UseAnimation';
import Icon from 'react-native-vector-icons/dist/Ionicons'


import { styles } from '../theme/loginTheme';
import { color } from 'react-native-reanimated';
import { useForm } from '../hooks/UseForm';


export const LoginScreen = () => {
    const {opacity,fadeIn} =UseAnimation(0);
    const {username,password,onChange}=useForm({
        username:'',
        password:'',
    });
    const [secureTextEntry, setsecureTextEntry] = useState(true)
  
    const showPasword=()=>{
        setsecureTextEntry(!secureTextEntry)
      
       setTimeout(() => {
        setsecureTextEntry(secureTextEntry)
     
          }, 1000)}
  
  
    fadeIn();

    const onLogin=()=>{
        console.log({username,password});
        Keyboard.dismiss();
        
    }
    
    return (
       <View style={{
           backgroundColor:'white',
           flex:1
       }}>
           
            {/* background */}
                <Backgrond/> 
            {/* keyboard avoid view */}
            
                <Animated.View style={{flex:1,opacity}}>
                <KeyboardAvoidingView 
                    style={styles.animatedContainer}
                    behavior={(Platform.OS=='ios')?'padding':'height'} 
                    >
                    <WhiteLogo />  
                    
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
                    value={username}
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
