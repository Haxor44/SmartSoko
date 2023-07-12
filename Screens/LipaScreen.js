import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";

const malipo = ['Visa','Mpesa','Paypal'];

const LipaScreen = ({navigation})=>{
    const [malipoIndex,setMalipoIndex] = React.useState(0);

    const MalipoList = () => {
        return (<View style={style.malipo}>
            {malipo.map((item,index)=>(
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setMalipoIndex(index)}>
                    <Text key={index} style={[style.MalipoText,malipoIndex == index && style.MalipoTextSelect]}>{item}</Text>
                </TouchableOpacity>
                
            ))}
        </View>)
    }

    return(
        <SafeAreaView style={{flex:1,
            paddingHorizontal:20,
            backgroundColor:"white",}}>
            <View style={style.header}>
                <MalipoList/>
            </View>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    header:{
        marginTop:40
    },
    malipo:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-between'
    },
    MalipoText:{
        fontSize:18,
        color:'grey',
        fontWeight:'bold',
    },
    MalipoTextSelect:{
        color:'black',
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:'#34EB7A',
    }
})

export default LipaScreen;