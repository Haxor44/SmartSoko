import React, {createContext,useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {BASE_URL} from "../api/config";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userTkn,setTkn] = useState(null);
    const [userData,setUserData] = useState(null);
    

    const login = (username,password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/auth/token`,{
            username,
            password
        })
        .then(res=>{
            console.log(res.data);
            console.log(username);
            console.log(password);
            let userData = res.data;
            setUserData(userData);
            setTkn(userData);

           
        })
        .catch(e => {
            console.log("Error is");
            console.log(e);
            console.log(username);
            console.log(password);
        })
        
    }

    const register = (name,email,password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/auth/register`,{
            name,
            email,
            password
        })
        .then(res=>{
            console.log(res.data);
            console.log(name);
            console.log(password);
            
        })
        .catch(e => {
            console.log("Error is");
            console.log(e);
            console.log(name);
            console.log(password);
        })
        
    }

    const logout = () => {
        
        setIsLoading(true);
        setTkn(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userTkn = await AsyncStorage.getItem('userToken');
            
            if (userData) {
                setTkn(userTkn);
            }
            
            
            setIsLoading(false)
            
        } catch (error) {
            console.log(error);
        }

    }
    
    useEffect(()=>{
        isLoggedIn();
    },[]);
    return(
        <AuthContext.Provider value={{login,register,logout,isLoading,userTkn}}>
            {children}
        </AuthContext.Provider>
    )
}