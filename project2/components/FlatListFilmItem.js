import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const notPosterFound =
  "https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png";
export default class FlatListFilmItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        film: this.props.item
    }
  }
  
  truncateStringToLong = (str) => {
    if (str.length > 15) {
      str = str.substring(0, 14) + "...";
    }
    return str;
  };
  filmItem = async() => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${this.props.item.Title}&y=${this.props.item.Year}&plot=full&apikey=b02776da`)
        const results = await response.json();
        this.setState({
          film: results
        })
    } catch (err) {
      return console.log(err);
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={ async() => {
        await this.filmItem();
        this.props.nav.navigate("Details", {
        item: this.state.film
      })
      }
    }>
        <View
          style={{
            minWidth: "48%",
            marginHorizontal: "1%",
            marginVertical: 5,
            borderColor: "black",
            borderWidth: 2,
          }}

        >
          <View style={{ width: "98%" }}>
            <Image
              source={{
                uri:
                  this.props.item.Poster != "N/A"
                    ? this.props.item.Poster
                    : notPosterFound,
              }}
              style={{ height: 250 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {this.truncateStringToLong(this.props.item.Title)}
            </Text>
            <Text>{this.props.item.Year}</Text>
            <Text>{this.props.item.Plot}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
