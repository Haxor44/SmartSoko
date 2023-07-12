import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import OrderScreen from './Screens/OrderScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack2 = ()=>{
  <Drawer.Navigator>
     <Drawer.Screen name="Home" component={HomeScreen} />
     <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
}

 const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      
     
    )
}

export default AuthStack;AuthStack2;
