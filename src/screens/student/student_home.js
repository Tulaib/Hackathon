import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Modal , TouchableOpacity} from 'react-native'
import { auth, db } from "../../firebase";
import { Button, ListItem } from "react-native-elements";


const Home = ({ navigation }) => {
    const [listitem, setlistitem] = useState([])
    const [modal, setmodal] = useState(false)
   
    const [arr, setarr] = useState([])
    const Logout = () => {
        auth.signOut().then(() => {
            navigation.replace('StudentLogin');
        })
    }
    useEffect(() => {
        db.collection("list").onSnapshot(snapshot => (
            setlistitem(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        db.collection("list").onSnapshot(snapshot => (
            setarr(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, [])

    return (
        <>
        
        <Text style={{ color: '#000051' , fontSize:30, fontWeight:'bold' ,textAlign:'center',marginTop:20,marginBottom:20}}>Vacancies Availible In Different Companies </Text>


        <ScrollView style={{ maxHeight: "85%" }}>
            {
                listitem.map((val, id) => {
                    return (
                        <ListItem key={id} bottomDivider >
                            <ListItem.Content 
                            style={{ flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                               
                                <View>
                                    <Text style={{ marginBottom: 5 ,fontWeight:'bold',color:'#000',fontSize:28,letterSpacing:1,textTransform:'capitalize'}}>
                                        {val.data.Companyname}
                                    </Text>
                                    <Text style={{fontWeight:'bold',color:'#000051',textTransform:'lowercase',fontSize:18}} >{val.data.Email}</Text>
                                    <Text style={{fontWeight:'bold',color:'black',textTransform:'uppercase'}}>Designation :
                                    <Text style={{fontSize:17, textTransform:'capitalize',color:"#000051"}}> {val.data.jobprofile}</Text>  </Text> 
                                    <View style={{flex:1}}>
                                    <Text style={{fontWeight:'600',color:'black',fontSize:18}}>Pay:  
                                    <Text style={{fontSize:17, textTransform:'capitalize',color:"#000051"}}> {val.data.salary}</Text>  </Text>
                                    <Text style={{ marginTop: 5 , fontSize:18 , fontWeight:'bold',color:'#000'}}>Criteria: 
                                    <Text style={{fontSize:17, textTransform:'capitalize',color:"#000051",fontWeight:"100"}}> {val.data.eligibilityCriteria}</Text> 
                                    </Text>
                                    </View>
                                    </View>
                                
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
        <View style={styles.btnView}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent:'space-around' }}>
                <Button  onPress={() => navigation.navigate("StudentProfile")} 
                containerStyle={styles.donor} title="Create Your Profile" titleStyle={{color:'#000051', fontSize:17,fontWeight:'bold'}} type="outline" />
               
            </View>
        </View>
    </>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        maxHeight: "7.5%",
        borderBottomColor:"#000051",
        borderBottomWidth:1

    },
    modals:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    donor: {
        width: '49%',
        borderColor:'#000051',
        borderWidth:2
        },
    btnView: {
        marginBottom: 0,
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        maxHeight: "7.5%",
        backgroundColor:'#fff'

    }
})
