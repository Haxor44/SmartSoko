import React from  "react";
import { AuthContext } from './context/AuthContext';
import { View,ActivityIndicator } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import AuthStack from "./AuthStack";

import AppStack from "./AppStack";
import AuthStack2 from "./AuthStack2";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


export default function AppNav(){
  const {isLoading,userTkn} = React.useContext(AuthContext);
  
  if(isLoading){
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size={'large'}/>
    </View>
  }
  
  return(
    <NavigationContainer>
      {userTkn !== null ? <AppStack/> : <AuthStack/>}
      
      <AuthStack2/>
  </NavigationContainer>
    )
}



