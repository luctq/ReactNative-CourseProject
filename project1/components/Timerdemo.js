import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PointPropType, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Time</Text>
      <Text style={styles.title}>25:00</Text>
      <View style={{flexDirection: 'row'}}>
        <Button style={{flex:1}} title='Pause'></Button>
        <Button  style={{flex:1}} title='Reset'></Button>
      </View>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'green', marginRight: 16}}>Work Time </Text>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text>Min:</Text>
            <TextInput style={styles.input} value='25'></TextInput>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Sec:</Text>
            <TextInput style={styles.input} value='25'></TextInput>
          </View>  
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'red', marginRight: 16}}>Break Time </Text>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text>Min:</Text>
            <TextInput style={styles.input} value='25'></TextInput>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Sec:</Text>
            <TextInput style={styles.input} value='25'></TextInput>
          </View>  
        </View>
      </View>
      <StatusBar style="auto" />
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
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});