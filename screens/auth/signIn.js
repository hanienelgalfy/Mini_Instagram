import { StatusBar } from 'expo-status-bar';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity , Alert} from 'react-native';

export default function SignIn() {

  const [loadUser, setLoadUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [check , setCheck] = useState(false); 
  const getDataUsingGet = () => {
    
    fetch('http://localhost:3000/user', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        setUsers(responseJson);
        setLoadUser(true);
        console.log(responseJson);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
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
        if(user.email === text){
          setCheck(true);
        }else {
          setCheck(false);
        }
      })}
      placeholder= 'email'
    />
      <TextInput
      style={{ height: 40, width: 200,borderColor: 'gray', borderWidth: 1 , paddingLeft: 10}}
      onChangeText= {text=> users.map((user)=> {
        if(user.password === text){
          setCheck(true);
        }
        else{
          setCheck(false);
        }
      })}
      secureTextEntry = {true}
      placeholder= 'password'
    />

    <TouchableOpacity style={{backgroundColor:'pink', padding : 10, marginTop:50}} onPress = {()=> {if (check ===true) {
      navigation.navigate('Feed')
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