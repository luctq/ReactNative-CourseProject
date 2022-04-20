import React, { Component } from "react";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";

// Control output on single news article screen
class Details extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { item } = this.props;
    // Link to article page on BBC website
    const url = item.url;
    console.log(url)
    WebBrowser.openBrowserAsync(url);
  }

  render() {
    const { item } = this.props;
    const source = item.urlToImage ? { uri: item.urlToImage } : null;
    // Format publish date and time
    const dateTime = moment(item.publishedAt).calendar();

    return (
      // Style details page output
      <ScrollView style={styles.container}>
        <Image source={source} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.published}>Published: {dateTime}</Text>
        <Text style={styles.synopsis}>{item.description}</Text>
        <View style={styles.link}>
          <TouchableHighlight
            underlayColor="#FF6347"
            style={styles.button}
            onPress={this.onPress}
          >
            <Text style={styles.buttonText}>Read more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    flex: 1,
    alignItems: "center",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#bb1919",
    width: 120,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },

  title: {
    paddingTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },

  published: {
    fontSize: 18,
    paddingVertical: 10,
  },

  synopsis: {
    paddingTop: 14,
    fontSize: 16,
  },

  image: {
    aspectRatio: 16 / 9,
    width: "100%",
    maxWidth: 350,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default Details;
