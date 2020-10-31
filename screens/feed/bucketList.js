import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput} from 'react-native';


export default function BucketList() {
    const [places, setPlaces] = useState([
  "Cairo",
  "Australia",
  "Canada",
    ]);
    const [text, setText] = useState("");
   const  handleKeyDown = (e) =>  {
    if(e.nativeEvent.key == "Enter"){
        setPlaces(...places , text);
    }
}
  return (
    <View style={styles.container}>
    <FlatList
        ListHeaderComponent = {()=> (<TextInput style ={{ borderWidth:2,
          borderColor:'gray',width:300,
          height:30,}}  defaultValue={text} onKeyPress={handleKeyDown} />)}
   showsVerticalScrollIndicator={false}
    data={places}
    renderItem={ ({ item, index }) => (
      <Text 
      style={{
          padding: 5,
          marginTop: 20,
           width:300,
          height:30,
          borderWidth:2,
          borderColor:'gray',
          resizeMode:'contain',
          }}
       
      >{item}
      </Text>
    )}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});