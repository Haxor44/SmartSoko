import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions,Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
const OrderScreen = ({navigation,route})=>{
    const {crop,items} = route.params;

    const tax = 30;
    const total= parseFloat(crop.price) + parseFloat(tax);
    
  
    
    //console.log(items); 
    const [numOfItems,setNumOfItems] = React.useState(items);
    const {isLoading,userTkn} = React.useContext(AuthContext);
   

    if(numOfItems < 1){
            setNumOfItems(1);  
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={orderStyles.header}>
                <AntDesign name="arrowleft" size={28} color="black" onPress={()=> navigation.goBack()}/>
                <Text style={{marginLeft:66,marginTop:2,fontSize:18,}}>Order Details</Text>
            </View>
            <View style={{marginTop:40,marginLeft:25}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>My Cart</Text>
            </View>
            
                
                <View style={{flex:1,flexDirection:'row',marginTop:20}}>
                    <View style={{flex:0.40,marginLeft:6,width:30,height:120,justifyContent:'center',alignItems:'center'}}>
                        <Image source={crop.img} style={{resizeMode:'contain',width:100,height:100,backgroundColor:'lightgrey',borderRadius:10,}}/>
                    </View>
                    <View style={orderStyles.orderDetails}>
                    <View style={{marginTop:10,marginBottom:8}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{crop.name}</Text>
                        <Text style={{fontSize:16,marginTop:7}}>Ksh{crop.price}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginLeft:2}}>
                    <TouchableOpacity
                        onPress={() => setNumOfItems(numOfItems-1)}
                    >
                        <View style={{borderWidth:2,borderColor:'grey',width:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:4,marginRight:4}}>
                        <Text style={{fontSize:24,fontWeight:'bold'}}>{numOfItems}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setNumOfItems(numOfItems+1)}
                    >
                        <View style={{borderWidth:2,borderColor:'grey',width:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderRadius:8,backgroundColor:'#34EB7A',marginLeft:60,}}>
                            <View>
                                <AntDesign name="delete" size={30} color="white" />
                            </View>                           
                        </View>
                    </TouchableOpacity>
                </View>
                </View>
                </View>

                

                <View style={{flex:3,marginLeft:26}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>Delivery Location</Text>
                    <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop:4,}}>
                            <FontAwesome5 name="truck" size={26} color="lime" />
                        </View>
                        <View style={{flexDirection:'column',marginLeft:16}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Nakuru</Text>
                            <Text>Kabarak Road</Text>
                        </View> 
                        <View style={{marginLeft:150}}>
                            <AntDesign name="arrowright" size={24} color="black" />
                        </View>
                    </View>
                    </TouchableOpacity>

                    <View style={{marginTop:32}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>Payment Method</Text>
                    <TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop:4,}}>
                        <FontAwesome5 name="cc-visa" size={24} color="lime" />
                        </View>
                        <View style={{flexDirection:'column',marginLeft:16}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Visa</Text>
                            <Text>***</Text>
                        </View> 
                        <View style={{marginLeft:203}}>
                            <AntDesign name="arrowright" size={24} color="black" />
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                </View>

                

                <View style={{marginTop:44}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>Order Info</Text>
                    <TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{marginTop:4,}}>
                            <Text>Subtotal</Text>
                            <Text style={{marginTop:4,}}>Shipping Tax</Text>
                            <Text style={{marginTop:20,}}>Total</Text>
                        </View>
                        <View style={{flexDirection:'column', marginRight:20}}>
                            <Text style={{fontSize:16,marginTop:3}}>KSH{crop.price}</Text>
                            <Text style={{marginTop:4,}}>KSH30</Text>
                            <Text style={{marginTop:14,fontSize:18,fontWeight:'bold'}}>KSH {parseFloat(total *numOfItems).toFixed(2)}</Text>
                        </View> 
                        
                    </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={{marginTop:25,justifyContent:'center',alignItems:'center',}}>
                    <TouchableOpacity style={{width:'70%',marginRight:18}} onPress={userTkn !== null ? ()=> navigation.navigate('Pay',{crop:route.params,items:numOfItems}) : ()=> navigation.navigate('Login')}>
                        <View style={{borderRadius:16,backgroundColor:'#34EB7A',justifyContent:'center',alignItems:'center',}}>
                            <Text style={{fontSize:24,color:'white',}}>Checkout</Text>
                        </View>        
                    </TouchableOpacity>
                </View>
                    
                </View>

                

                
           
        </SafeAreaView>
    )
}

const orderStyles = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:40,
        flexDirection:'row',
    },
    cartContents:{
        flex:1,
        flexDirection:'row',
        marginTop:10,      
    },
    imgContainer:{
        flex:0.58,
        marginTop:20,
        
        
    },
    orderDetails:{
        flex:0.60,

    }
})

export default OrderScreen;