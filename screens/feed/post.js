import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity, ScrollView} from 'react-native';



export default function Post({navigation}) {
    const [images , setImages] = useState([
        require('../../assets/dummyUser.jpg') , 
        require('../../assets/dummyUser2.png') , 
        require('../../assets/dummyUser3.jpg') , 
    ])
    let multiSelect=null;
    const [selected , setSelected] = useState("");
    const [selectedItems , onSelectedItemsChange] = useState([]);
  return (
      <ScrollView>
    <View style={styles.container}>
        {images.map((image) => (
            <TouchableOpacity onPress={()=> setSelected(image)}>
            <Image style ={{width: 100, height: 100}}source = {image} />
            </TouchableOpacity>
        ))}
         </View>
         <View>
         <Text style={{margin: 10}}>CHOOOSE YOUR BUCKETLIST</Text>
      {navigation.state.params.bucketList.map((bucketList)=> (

          <TouchableOpacity style ={{borderWidth:2,
          borderColor:'#d35647',
          resizeMode:'contain',}}><Text>{bucketList}</Text></TouchableOpacity>
      ))}
      </View> 
        <TouchableOpacity style={{alignItems: 'center' , justifyContent: 'center' , marginTop: 50 , backgroundColor: 'orange'} }
        onPress= {()=> navigation.navigate("Feed" , {image: selected})}
        >
        <Text>Add </Text>
        </TouchableOpacity>
        

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
});
