import React, { useEffect, useState } from 'react'
import { Text, View, TextInput,ScrollView, StyleSheet , Image} from 'react-native';
import { Input, Button } from 'react-native-elements';
import {auth} from "../../firebase";
import Signup from "../student/student_signup";


const Login = ({navigation}) => {

    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            if(authUser){
                navigation.replace("studenthome")
            }
        }); 
        return unsubscribe;
    },[])

    const signIn = () =>{
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=> alert(error))
    };

    return (
        <>
        <ScrollView style={{ maxHeight: "100%" }}>
            <View style={styles.container}>
            <Image source={require("../../assets/img.png")} style={{width:300,height:300,resizeMode:'contain'}}></Image>
                <Text style={{ color: '#000051' , fontSize:42, fontWeight:'bold' }}>Student Portal</Text>
                <Text style={{ color: '#000051' , fontSize:32, fontWeight:'bold' }}>Sign In</Text>
                <Input
                placeholder='  Ahmed@gmail.com'
                style={{width:300}}
                type="email"
                value={email} autoFocus onChangeText={(val) => setemail(val)}
                containerStyle={{width:300, borderRadius:50,marginTop:20}}
                leftIcon={{ type: 'font-awesome', name: 'user',color:'#000051' }}/>
                 <Input
                placeholder='  Password'
                style={{width:300}}
                type="password" value={password} secureTextEntry 
                onChangeText={(val) => setpassword(val)}
                containerStyle={{width:300, borderRadius:50}}
                leftIcon={{ type: 'font-awesome', name: 'lock' ,color:'#000051'}}/> 
                <View style={styles.btns}>
                <Button titleStyle={{color:'#000051'}} buttonStyle={{borderColor:'#000051',color:'#000051'}} onPress={signIn} containerStyle={styles.btn} type="outline" title="LOG IN" />

                </View>     
                <Text style={{ color: '#000051' , fontSize:18, fontWeight:'bold',marginTop:20 }}>Don't have Account? Sign up below!</Text>

            </View>
            <Signup/>
            </ScrollView>
        </>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inpField:{
        width:300
    },
    btn:{
        borderColor:'#000051',
        color:'#000051',
        width:135
    },
    btns:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around'    
    }
});

export default Login
