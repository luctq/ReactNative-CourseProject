import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./ListScreen";
import DetailsScreen from "./DetailsScreen";
const Stack = createNativeStackNavigator();
class StackListScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={this.props.route.params.typeScreen}
          component={ListScreen}
          initialParams={{ api: this.props.route.params.typeScreen}}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }
}

export default StackListScreen;
