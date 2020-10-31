import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View  , TouchableOpacity , FlatList, Image} from 'react-native';

export default function Feed({navigation}) {

 

const FlatListHeader = () =>{
  return (
 <View style ={{flexDirection: 'row' , justifyContent: 'space-around' , flex: 1}}>
    <TouchableOpacity onPress = {()=> navigation.navigate('BucketList')}>
    <Text>Bucket List</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {()=> navigation.navigate('Profile' , {email: navigation.state.params.email})}>
    <Text>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text>Add post</Text>
    </TouchableOpacity>
    </View>
  )
}

  return (
    <View style={styles.container}>
   
    <View style ={{alignItems: 'center',}}>
    <FlatList
        ListHeaderComponent = {FlatListHeader}
   showsVerticalScrollIndicator={false}
   
    data={navigation.state.params.feedsArray}
    renderItem={ ({ item, index }) => (
      <Image source={{uri: item}} // Use item to set the image source
        key={index} // Important to set a key for list items
        style={{
          width:260,
          height:300,
          borderWidth:2,
          borderColor:'#d35647',
          resizeMode:'contain',
          margin:8
        }}
      />
    )}
  />
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
