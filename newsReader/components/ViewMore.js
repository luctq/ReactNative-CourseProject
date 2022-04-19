import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";

class ViewMore extends Component {
  constructor(props) {
    super(props);
  }
  onPress() {
    console.log("hello")
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor="#FF6347"
          style={styles.button}
          onPress={this.onPress}
        >
          <Text style={styles.buttonText}>View More</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    link: {
      alignItems: "center",
    },
  
    button: {
      backgroundColor: "blue",
      height: 50,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5
    },
  
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFF",
    },
});
export default ViewMore;
