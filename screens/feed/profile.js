import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
     <Image
     style ={{width: 200, height: 200}}
        source={require('../../assets/dummyUser.jpg')}
      />
      <Text style={{marginLeft: 10}}>{navigation.state.params.email}</Text>
      <Text style={{marginLeft: 10}}>{navigation.state.params.username}
      </Text >
       <Text style={{marginLeft: 10}}>{navigation.state.params.age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
