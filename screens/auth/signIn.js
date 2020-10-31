import { StatusBar } from 'expo-status-bar';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity , Alert} from 'react-native';


export default function SignIn({navigation}) {


  const [loadUser, setLoadUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [check , setCheck] = useState(false); 
  const [email , setEmail] = useState("");
  const[username , setUsername] = useState("");
  const[age , setAge] = useState("");
  const [feedsArray , setFeeds] = useState([]);
const [bucketList , setBucketList] = useState([]);
  const getDataUsingGet = () => {
    fetch('http://localhost:3000/user', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setUsers(responseJson);
        console.log("FEEDS" + feedsArray);
        setLoadUser(true);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

useEffect(() => {
  if(!loadUser){
      getDataUsingGet();
  }
  });
  return (
    <View style={styles.container}>
     <Image
     style ={{width: 200, height: 200}}
        source={require('../../assets/dummyUser.jpg')}
      />
       <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 , marginBottom: 10 , paddingLeft: 10}}
      onChangeText= {text=> users.map((user)=> {
        if(user.email === text.toLowerCase()){
          setEmail(user.email);
          setFeeds(user.feed);
          setUsername(user.username);
          setAge(user.age);
          setBucketList(user.bucketList);
          setCheck(true);
        }
      }

      )}
      placeholder= 'email'
    />
      <TextInput
      style={{ height: 40, width: 200,borderColor: 'gray', borderWidth: 1 , paddingLeft: 10}}
      onChangeText= {text=> users.map((user)=> {
        if(user.password === text){
          setCheck(true); 
        }
      }
      )}
      secureTextEntry = {true}
      placeholder= 'password'
    />

    <TouchableOpacity style={{backgroundColor:'pink', padding : 10, marginTop:50}} onPress = {()=> {if (check ===true) {
  navigation.navigate("Feed" , {email : email , feedsArray: feedsArray , bucketList: bucketList , age: age , username: username});
    }else{
      Alert.alert(
      "Oops",
      "Invalid Email/Password",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }
    
    }}>
    <Text>Login</Text>
    </TouchableOpacity>
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
});