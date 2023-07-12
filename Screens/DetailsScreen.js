import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions,Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AuthContext } from '../context/AuthContext';
const DetailsScreen = ({navigation,route}) => {
    const crop = route.params;
    const [numOfItems,setNumOfItems] = React.useState(1);
    const {isLoading,userTkn} = React.useContext(AuthContext);
    if(numOfItems < 1){
        setNumOfItems(1);
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
            <AntDesign name="arrowleft" size={28} color="black" onPress={()=> navigation.goBack()}/>
            <Entypo name="shopping-cart" size={28} color="black" />
            </View>
            <View style={styles.imgContainer}>
                <Image source={crop.img} style={{resizeMode:'contain',flex:1}}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={{marginBottom:10}}></View>
                <View style={{margintTop:20,marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold',fontSize:22}}>{crop.name}</Text>
                        <View style={{backgroundColor:'#34EB7A', borderRadius:5,justifyContent:'center',alignItems:'center',}}>
                            <Text style={{color:'#F1F1F1'}}>Ksh{crop.price}</Text>
                        </View>
                    </View>            
                </View>
                <View style={{flexDirection:'column',marginTop:58,marginLeft:20,marginBottom:25}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Description</Text>
                    <Text style={{fontSize:15,marginTop:5}}>{crop.about}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',marginLeft:15}}>
                    <TouchableOpacity
                         onPress={() => setNumOfItems(numOfItems-1)}
                    >
                        <View style={{borderWidth:2,borderColor:'grey',width:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:8,marginRight:8}}>
                        <Text style={{fontSize:24,fontWeight:'bold'}}>{numOfItems}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setNumOfItems(numOfItems+1)}
                    >
                        <View style={{borderWidth:2,borderColor:'grey',width:40,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Orders',{crop:route.params,items:numOfItems})}
                    >
                        <View style={{borderRadius:12,marginLeft:50,width:120,height:40,backgroundColor:'#34EB7A',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'#F1F1F1'}}>Buy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        backgroundColor:'#F1F1F1',
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imgContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:'lightgrey',
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:20,
        marginTop:30,
        paddingTop:30
    }
})
export default DetailsScreen;