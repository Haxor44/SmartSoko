import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { AuthContext } from "../context/AuthContext";


const RegisterScreen = ({navigation})=>{
    const [name, setName] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const {register} = React.useContext(AuthContext);
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"whitesmoke"}}>
            <View style={styles.head}>
                <Text style={{fontSize:40,fontWeight:'bold',color:'#34EB7A'}}>Smart Soko</Text>
            </View>
            <View style={styles.inputs}>
            <TextInput
                style={styles.input}
                onChangeText={usrname => setName(usrname)}
                placeholder="Enter name..."
                value={name}
            />
            <TextInput
                style={styles.input}
                onChangeText={email => setEmail(email)}
                placeholder="Enter email..."
                value={email}
            />
             <TextInput
                style={styles.input}
                onChangeText={password => setPassword(password)}
                placeholder="Enter password..."
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={()=> {register(name,email,password)}}>
                <View style={{marginTop:42,width:"70%",borderRadius:16,backgroundColor:'#34EB7A',justifyContent:'center',alignItems:'center',}}>
                    <Text style={{fontSize:24,color:'white',}}>Register</Text>
                </View> 
            </TouchableOpacity> 

            <View style={{flexDirection:'row',marginTop:22}}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#34EB7A'}}>Login</Text>
                </TouchableOpacity>
             </View>          
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    head:{
        marginTop:150,
        justifyContent:"center",
        alignItems:"center"
    },
    inputs:{
        flex:1,
        flexDirection:'column',
        marginLeft:88,
        
        
    },
    input: {
        height: 40,
        marginTop: 42, 
        borderWidth: 0.4,
        padding: 10,
        width:"70%",
        backgroundColor:'#F1F1F1',
      },
})

export default RegisterScreen;