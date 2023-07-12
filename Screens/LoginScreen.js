import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity,} from "react-native";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({navigation})=>{

    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const {login} = React.useContext(AuthContext);

    const login2 = ()=>{
        console.log("username is:"+username);
        console.log("password is:"+password);
    }
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"whitesmoke"}}>
            <View style={styles.head}>
                <Text style={{fontSize:40,fontWeight:'bold',color:'#34EB7A'}}>Smart Soko</Text>
            </View>
            <View style={styles.inputs}>
            
            <TextInput
                style={styles.input}
                onChangeText={usrname => setUsername(usrname)}
                placeholder="Enter username..."
                value={username}
            />
             <TextInput
                style={styles.input}
                onChangeText={pass=>setPassword(pass)}
                placeholder="Enter password..."
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={()=> {login(username,password)}}>
                <View style={{marginTop:42,width:"70%",borderRadius:16,backgroundColor:'#34EB7A',justifyContent:'center',alignItems:'center',}}>
                    <Text style={{fontSize:24,color:'white',}}>Login</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity>
                    <View style={{marginTop:29,marginLeft:45}}>
                        <Text style={{color:'grey'}}>Forgot Password?</Text>
                    </View>
            </TouchableOpacity>

             <View style={{flexDirection:'row',marginTop:22}}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#34EB7A'}}>Sign Up</Text>
                    
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

export default LoginScreen;