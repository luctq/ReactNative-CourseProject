import React, { Component } from "react";
import { View, Text } from "react-native";
import Search from "../components/Search";
import ListSearch from "../components/ListSearch";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetail = this.navigateToDetail.bind(this);
    this.state = {
        statusSearch: false,
        valueSearch: ""
    }
  }
  navigateToDetail(item) {
    this.props.navigation.navigate("Details", {
      item: item,
    });
  }
  render() {
    return (
        <View>
        <ListSearch navigateToDetail={this.navigateToDetail}/>
      </View>
    );
  }
}
export default SearchScreen;
