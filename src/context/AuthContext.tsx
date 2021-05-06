import React, { createContext,useReducer,useEffect } from 'react';
import { LoginResponse, Usuario, loginData } from '../interfaces/appInterfaces';
import { authReduer, AuthState } from './AuthReducer';
import cafeApi from '../api/cafeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';



type AuthContextProps={
    errorMessage:string;
    token:string|null;
    user:Usuario|null;
    status:'checking'|'authenticated'|'not-authenticated';
    signUp:()=>void;
    signIn:({correo,password}:loginData)=>void;
    logOut:()=>void;
    removeError:()=>void;

}

const authInicialState:AuthState={
    status:'checking',
    token:null,
    user:null,
    errorMessage:''
}

export const AuthContext=createContext({}as AuthContextProps);

export const AuthProvider=({children}:any)=>{


    const [state, dispatch] = useReducer(authReduer, authInicialState)

    useEffect(() => {
       checktoken(); 
    }, [])

    const checktoken=async () => {
        const token=await AsyncStorage.getItem('token')
        .then(token=>{
            console.log({token})
        }) ;
    }

    const  signIn   =async({correo,password}:loginData)=>{
        try{
            const resp=await cafeApi.post<LoginResponse>('/auth/login',{correo,password})
                dispatch({
                    type:'signUp',
                    payload:{
                        token:resp.data.token,
                        user:resp.data.usuario
                    }
                });
          await AsyncStorage.setItem('token',resp.data.token)      
        }catch(error)
        {
            console.log(error.response.data.msg)
            dispatch({type:'addError',payload:error.response.data.msg||'información incorrecta'})
        }
    };
    const  signUp      =()=>{};
    const logOut     =()=>{};
    const removeError=()=>{
        dispatch({  type:'removeError', })
    };

return(

    <AuthContext.Provider value={{
        ...state,
        signUp,     
        signIn,    
        logOut ,   
        removeError,
    }}> 
        {children}
    </AuthContext.Provider>
)
}