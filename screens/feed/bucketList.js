import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableOpacity} from 'react-native';


export default function BucketList({navigation}) {
   
    const [text, setText] = useState("");
  const [places , setPlaces] = useState(navigation.state.params.bucketList);
  return (
    <View style={styles.container}>
    <View style={{flexDirection: 'row' , justifyContent:'space-between'}} >
    <TextInput style ={{ borderWidth:2,
          borderColor:'gray',width:300,
          height:30,}}  onChangeText={(text)=> setText(text)} value={text}  />
          <TouchableOpacity style={{backgroundColor: 'orange' , borderRadius: 5, justifyContent: 'center' , marginRight: 10}}
          onPress= {()=> setPlaces([...places, text])}
          ><Text>Add</Text></TouchableOpacity>
</View>
    <FlatList
       
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