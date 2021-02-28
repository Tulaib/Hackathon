import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native';
import { Button, ListItem } from "react-native-elements";
import { auth, db } from "../../firebase";


function App() {

  const [stdlistitem, setstdlistitem] = useState([])
  const [cmplistitem, setcmplistitem] = useState([])
  const [arr, setarr] = useState([])

  const [modal, setmodal] = useState(false)
  const [modals, setmodals] = useState(false)


  useEffect(() => {
    db.collection("studentProfile").onSnapshot(snapshot => (
      setstdlistitem(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
    db.collection("list").onSnapshot(snapshot => (
      setcmplistitem(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
    

  }, [])


  return (

    <View style={styles.container}>
      <View style={styles.main1}>
        <Button
          containerStyle={{ borderColor: "#000051", borderWidth: 2, marginBottom: 10, marginTop: 10 }} title="Student Details"
          titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
          type="outline"
          onPress={() => setmodal(true)} />
        <Button
          containerStyle={{ borderColor: "#000051", borderWidth: 2 }} title="Company Details"
          titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
          onPress={() => setmodals(true)} 
          type="outline" />
      </View>
      <View style={styles.main2}>
        <Modal visible={modal} animationType='slide' style={{height:300}} >
          <ScrollView style={{ maxHeight: "100%" }}>
            <Button
              containerStyle={{ borderColor: "#000051", borderWidth: 2 }} title="Go Back"
              titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
              type="outline"
              onPress={() => setmodal(false)} />
            {
              stdlistitem.map((val, id) => {
                return (
                  <ListItem key={id} bottomDivider >
                    <ListItem.Content
                      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>

                      <View>
                        <Text style={{ marginBottom: 5, fontWeight: 'bold', color: '#000', fontSize: 28, letterSpacing: 1, textTransform: 'capitalize' }}>
                          {val.data.Fullname}
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#000051', textTransform: 'lowercase', fontSize: 18 }} >{val.data.Email}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase' }}>Age :
                                <Text style={{ fontWeight: '100', fontSize: 17, textTransform: 'capitalize', color: "#000051" }}> {val.data.Age}</Text>  </Text>
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>College :
                                <Text style={{ fontWeight: '100', fontSize: 17, textTransform: 'capitalize', color: "#000051" }}> {val.data.CollegeName}</Text>  </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>College Aggregate :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.HSC}
                            </Text>
                          </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>University :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.UniversityName}
                            </Text>
                          </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>University CGPA :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.CGPA}
                            </Text>
                          </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Major :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.Department}
                            </Text>
                          </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Gender :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.Gender}
                            </Text>
                          </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Contact No :
                                <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}>
                              {" " + val.data.Contact}
                            </Text>
                          </Text>
                        </View>
                        <Button
                          containerStyle={{ borderColor: "#000051", borderWidth: 2 }} title="Delete"
                          titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
                          type="outline"
                          onPress={()=> {
                            db.collection("studentProfile")
                            .doc(val.id)
                            .delete()
                            .then(() => {
                              console.log("Document successfully deleted!");
                            console.log(ids)
                            }).catch((error) => {
                              console.error("Error removing document: ", error);
                            });
                           
                          }} />
                      </View>

                    </ListItem.Content>
                  </ListItem>
                )
              })
            }
          </ScrollView>

        </Modal>
        <Modal visible={modals} animationType='fade' >
          <ScrollView style={{ maxHeight: "100%" }}>
            <Button
              containerStyle={{ borderColor: "#000051", borderWidth: 2 }} title="Go Back"
              titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
              type="outline"
              onPress={() => setmodals(false)} />
            {
              cmplistitem.map((val, id) => {
                return (
                  <ListItem key={id} bottomDivider >
                    <ListItem.Content
                      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>

                      <View>
                        <Text style={{ marginBottom: 5, fontWeight: 'bold', color: '#000', fontSize: 28, letterSpacing: 1, textTransform: 'capitalize' }}>
                          {val.data.Companyname}
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#000051', textTransform: 'lowercase', fontSize: 18 }} >{val.data.Email}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'black', textTransform: 'uppercase' }}>Designation :
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: '100' }}> {val.data.jobprofile}</Text>  </Text>
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Pay:
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: '100' }}> {val.data.salary}</Text>  </Text>
                          <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#000' }}>Criteria:
                                    <Text style={{ fontSize: 17, textTransform: 'capitalize', color: "#000051", fontWeight: "100" }}> {val.data.eligibilityCriteria}</Text>
                          </Text>
                        </View>
                        <Button
                          containerStyle={{ borderColor: "#000051", borderWidth: 2 }} title="Delete"
                          titleStyle={{ color: '#000051', fontSize: 17, fontWeight: 'bold' }}
                          type="outline"
                          // onPress={() => setmodals(false)}
                          onPress={()=> {
                            db.collection("list")
                            .doc(val.id)
                            .delete()
                            .then(() => {
                              console.log("Document successfully deleted!");
                           // console.log(ids)
                            }).catch((error) => {
                              console.error("Error removing document: ", error);
                            });
                           
                          }} 
                           />
                      </View>

                    </ListItem.Content>
                  </ListItem>
                )
              })
            }
          </ScrollView>
        </Modal>
      </View>
    </View>
  );
}
// function deleteuser(id) {
//   db.collection("studentProfile").doc(id).delete().then(() => {
//     console.log("Document successfully deleted!");
//   console.log(ids)
//   }).catch((error) => {
//     console.error("Error removing document: ", error);
//   });
 
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  main1: {
    flex: 1,
    backgroundColor: "#fff"
  },
  main2: {
    flex: 4,
    backgroundColor: "#fff"
  }
});
export default App;
