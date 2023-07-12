import React from "react";
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import { NavigationContainer } 
         from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const Drawer = createDrawerNavigator();

 const AuthStack2 = ()=>{
    
        <Drawer.Navigator screenOptions={{headerShown:false}}>
     <Drawer.Screen name="Home" component={HomeScreen} />
     <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    
}

export default AuthStack2;