import { StatusBar } from 'expo-status-bar';
import React , { useEffect, useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = (props) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const signIn = () =>{
        console.log(email)
        if(email == 'admin' && password == 'admin')
        {
            props.navigation.navigate("AdminHome")
        }
        else{
            alert("soryy")
        }
    };
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/img.png")} style={{width:300,height:300,resizeMode:'contain'}}></Image>
      <Text style={{ color: '#000051' , fontSize:32, fontWeight:'bold' }}>Admin Login</Text>
      <Text style={{ color: '#000051' , fontSize:16, fontWeight:'bold' }}>Admin username and password is 'admin'</Text>
                <Input
                placeholder=' username'
                style={{width:300}}
                type="email"
                value={email} autoFocus onChangeText={(val) => setemail(val)}
                containerStyle={{width:300, borderRadius:50,marginTop:50}}
                leftIcon={{ type: 'font-awesome', name: 'user',color:'#000051' }}/>
                 <Input
                placeholder='  Password'
                style={{width:300}}
                type="password" value={password} secureTextEntry 
                onChangeText={(val) => setpassword(val)}
                containerStyle={{width:300, borderRadius:50}}
                leftIcon={{ type: 'font-awesome', name: 'lock' ,color:'#000051'}}/> 
                <View style={styles.btns}>
                <Button titleStyle={{color:'#000051'}} buttonStyle={{borderColor:'#000051',color:'red',}} onPress={signIn} containerStyle={styles.btn} type="outline" title="LOG IN" />
               
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  btn:{
      width:"100%",
      borderColor:"#000051",
      color:"#000051"
  }
});

export default Login

