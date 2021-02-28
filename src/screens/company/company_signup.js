import React, { useState } from 'react'
import {View,Text,SafeAreaView,StyleSheet,KeyboardAvoidingView} from 'react-native';
import {Input,Button} from 'react-native-elements';
import {auth} from "../../firebase";

const Signup = ({navigation}) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState()
    

    const register = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:name,
            });
        })
        .catch((error)=> alert(error.message));
    };


    return (
        <>
        <KeyboardAvoidingView style={styles.conntainer}>
            <Text  style={{ color: '#000051' , fontSize:32, fontWeight:'bold',marginTop:20 }}>Register</Text>
            <Input
                placeholder='  Tulaib'
                style={{width:300}}
                type="text"
                value={name} autoFocus onChangeText={(val) => setname(val)}
                containerStyle={{width:300, borderRadius:50,marginTop:50}}
                leftIcon={{ type: 'font-awesome', name: 'user',color:'#000051' }}/>
                <Input
                placeholder='  Tulaib@gmail.com'
                style={{width:300}}
                type="email"
                value={email} autoFocus onChangeText={(val) => setemail(val)}
                containerStyle={{width:300, borderRadius:50}}
                leftIcon={{ type: 'font-awesome', name: 'inbox',color:'#000051' }}/>
                <Input
                placeholder='  Password'
                style={{width:300}}
                type="password" value={password} secureTextEntry 
                onChangeText={(val) => setpassword(val)}
                containerStyle={{width:300, borderRadius:50}}
                leftIcon={{ type: 'font-awesome', name: 'lock' ,color:'#000051'}}/>
                <Button buttonStyle={{color:'red',backgroundColor:'#000051',marginBottom:50}} onPress={register} containerStyle={{width:135}} type="solid" title="Sign Up" />
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    conntainer:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems:"center",
        // justifyContent:"center"
    },
    inpField:{
        width:300
    },
    btn:{
      width: 135  
    },
});

export default Signup
