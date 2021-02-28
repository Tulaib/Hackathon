import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { auth, db } from "../firebase";

export default function App(props) {
  auth.signOut().then(() => {
   
  })
  return (
    <View style={styles.container}>
      <View style={styles.main1}>
      <Text style={{color:'#fff',textAlign:'center',justifyContent:"center",alignItems:'center',fontWeight:'bold',fontSize:42,marginTop:25}}> Campus Recruitment System</Text>
      </View>
      <View style={styles.main2}>
    
       <Button onPress={() => props.navigation.navigate("AdminLogin")} 
      containerStyle={styles.donor} title="Admin Login" titleStyle={{color:'#000051', fontSize:17,fontWeight:'bold'}}
      type="outline" />
       <Button  onPress={() => props.navigation.navigate("StudentLogin")} 
      containerStyle={styles.donor} title="Student Login" titleStyle={{color:'#000051', fontSize:17,fontWeight:'bold'}}
      type="outline" />
       <Button  onPress={() => props.navigation.navigate("CompanyLogin")} 
      containerStyle={styles.donor} title="Company Login" titleStyle={{color:'#000051', fontSize:17,fontWeight:'bold'}}
      type="outline" />
     
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donor: {
    width: '100%',
    borderColor:'#000051',
    borderWidth:2,
    marginBottom:20
    },
  main1:{
    flex:1,
    backgroundColor:"#000051",
    width:"100%"
  },
  main2:{
    marginTop:50,
    flex:2,
    backgroundColor:"#ffff",
    width:"100%"
  },
    
  btn:{
    borderColor:'red',
    color:'red',
    width:135
},
});
