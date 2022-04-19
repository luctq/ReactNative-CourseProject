import React, { Component } from "react";
import { View, Text } from "react-native";
import Search from "../components/Search";
import ListScreen from "./ListScreen";
import StackListScreen from "./StackListScreen";
import DetailsScreen from "./DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        statusSearch: false,
        valueSearch: ""
    }
  }
  render() {
    return (
      <View>
        <Text>{this.state.valueSearch}</Text>
        <Search onSearch={this.setState}/>
        <Stack.Navigator>
          <Stack.Screen
            name="Search Screen"
            component={ListScreen}
            initialParams={{ api: "Search" }}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
    );
  }
}
export default SearchScreen;
