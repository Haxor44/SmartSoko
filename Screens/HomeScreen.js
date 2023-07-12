import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions,Image } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from "@react-navigation/native";
import plants from "../consts/plants";
import AuthStack2 from "../AuthStack2";
const width = Dimensions.get("screen").width / 2 - 30;

const categories = ['POPULAR','ORGANIC','SYNTHETIC'];

const HomeScreen = ({navigation}) =>{
    const [categoryIndex,setCategoryIndex] = React.useState(0);

    const CategoryList = () => {
    return (<View style={style.category}>
        {categories.map((item,index)=>(
            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setCategoryIndex(index)}>
                <Text key={index} style={[style.categoryText,categoryIndex == index && style.categoryTextSelect]}>{item}</Text>
            </TouchableOpacity>
            
        ))}
    </View>)
}
const drawer = ()=>{
    <AuthStack2/>
}
    const Card = ({plant}) => {
        return( 
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('Details',plant)}
            >
            <View style={style.card}>
                <View style={{height:100,alignItems:'center'}}>
                    <Image 
                        style={{flex: 1, resizeMode: 'contain'}} source={plant.img}
                    />
                </View>
                <Text style={{fontWeight:'bold',fontSize:18,marginTop:10}}>{plant.name}</Text>
                <View style={{flexDirection:'column', justifyContent:'space-between',marginTop:7}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>${plant.price}</Text>
                    <View
                        style={{
                            height: 30,
                            width: 60,
                            backgroundColor: '#00B761',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:4,
                        }}>
                        <Text
                            style={{fontSize: 22, color: '#F1F1F1', fontWeight: 'bold'}}>
                            Buy
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"white",
        }}>
            <View style={style.header}>
                <View>
                    <Text style={{fontSize:40,fontWeight:'bold',color:'#34EB7A'}}>Smart Soko</Text>
                </View>
                <TouchableOpacity>
                    <Entypo name="shopping-cart" size={28} color="black" style={{marginTop:10}}/>
                </TouchableOpacity>
                
            </View>
            <View style={{marginTop:30, flexDirection:'row'}}>
                <View style={style.searchContainer}>
                    <FontAwesome name="search" size={24} color="black" style={{ marginLeft:20}}/>
                    <TextInput placeholder="Search" style={style.input}></TextInput>
                </View>
                <View style={style.sortBtn}>
                <MaterialIcons name="sort" size={24} color="white"  />
                </View>
            </View>
            <CategoryList/>
            <FlatList columnWrapperStyle={{justifyContent:'space-between'}} contentContainerStyle={{ marginTop:10,paddingBottom:50}} showsVerticalScrollIndicator={false} numColumns={2} data={plants} renderItem={({item})=> <Card plant={item}/>} />
        </SafeAreaView>

        
    )
}

const style = StyleSheet.create({
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    searchContainer:{
        height:50,
        backgroundColor:'white',
        borderRadius: 18,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        color:'black',
        marginLeft:5,
    },
    sortBtn:{
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor:'#34EB7A',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    category:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-between'
    },
    categoryText:{
        fontSize:18,
        color:'grey',
        fontWeight:'bold',
    },
    categoryTextSelect:{
        color:'black',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'#34EB7A',
    },
    card:{
        height:255,
        backgroundColor:'#F1F1F1',
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15
    },
});

export default HomeScreen;