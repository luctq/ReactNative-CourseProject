import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
export default function Search(props) {
  return (
    <View>
      <TextInput style={styles.inputBorder} placeholder="Search" onChangeText={console.log('search')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  inputBorder: {
    height: 40,
    marginHorizontal: "1%",
    marginTop: 40,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50
  },
});