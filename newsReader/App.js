import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./screens/ListScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { store } from "./resources/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator>
          <Stack.Screen name="News" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <Stack.Navigator>
          <Stack.Screen name="Top headlines" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="TopHeadlines" component={SettingsScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
