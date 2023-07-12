import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import OrderScreen from './Screens/OrderScreen';
import Payment from './Screens/Payment';
import LipaScreen from  './Screens/LipaScreen';



const Stack = createStackNavigator();

 const AppStack = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null}}>
            <Stack.Screen name="Orders" component={OrderScreen} />
            <Stack.Screen name="Pay" component={Payment} />
            <Stack.Screen name="Lipa" component={LipaScreen} />
      </Stack.Navigator>
    )
}

export default AppStack;
