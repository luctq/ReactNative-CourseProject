import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";
import moment from 'moment';
// Set styles and truncation for each headline
class ListItem extends Component {
  render() {
    const { item, onPress } = this.props;
    const dateTime = moment(item.publishedAt).calendar();
    return (
      <TouchableHighlight underlayColor="#bb1919" onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Image
            source={item.urlToImage? {uri: item.urlToImage} : null }
            style={{ aspectRatio: 16/9, width: "100%", maxWidth: 400 }}
          ></Image>
          <Text style={{marginTop: 5, fontSize: 11, color: 'gray'}}>{dateTime}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    marginVertical: 20
  },
});

export default ListItem;
