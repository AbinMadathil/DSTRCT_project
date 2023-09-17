import {View,Text,FlatList,StyleSheet,Pressable} from 'react-native';
import React,{useState,useEffect} from 'react';
import { firebase } from '../config';

const Fetch = () => {
    const [users, setUsers] = useState([]);
    const News = firebase.firestore().collection('news');
  
    useEffect(() => {
      const unsubscribe = News.onSnapshot((querySnapshot) => {
        const updatedUsers = [];
        querySnapshot.forEach((doc) => {
          const { pid, Name, Heading, Article } = doc.data();
          updatedUsers.push({
            id: doc.id,
            pid,
            Name,
            Heading,
            Article,
          });
        });
        setUsers(updatedUsers);
      });
  
      // Return a cleanup function to unsubscribe the listener
      return () => {
        unsubscribe();
      };
    }, []);



    return (
        <View style={{flex:1,marginTop:5}}>
            <FlatList
               style={{height:'100%'}}
               data={users}
               numColumns={1}
               renderItem={({item})=>(
                <Pressable  style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.iteamHeading}>{item.Heading}</Text>
                        <Text style={styles.iteamHeading}>{item.Name}</Text>
                        <Text style={styles.iteamText}>PersonId:{item.pid}</Text>
                        <Text style={styles.iteamText}>{item.Article}</Text>
                    </View>
                </Pressable>
               )}

            />
        </View>
    )
}

export default Fetch



const styles=StyleSheet.create({
    container:{
        backgroundColor:"grey",
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,
        
    },
     

    innerContainer:{
        alignItems:'center',
        flexDirection:'column',
        
    },
    iteamHeading:{
        fontWeight:'bold',
        
    },
    iteamText:{
        fontWeight:'300',
        
    }
})