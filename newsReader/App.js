import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListNewsScreen from "./screens/ListNewsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { store } from "./resources/store";
import { otherStore } from "./resources/otherStore";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTopHeadlinesScreen from "./screens/ListTopHeadlinesScreen";
import ListScreen from "./screens/ListScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function NewsScreen() {
  return (
    //<Provider store={store}>
      <Stack.Navigator>
      <Stack.Screen name="News" component={ListScreen} initialParams={{ api: "news" }}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    //</Provider>
    
  );
}

function TopHeadlineScreen() {
  return (
    //<Provider store={otherStore}>
      <Stack.Navigator>
      <Stack.Screen name="Top headlines" component={ListScreen} initialParams={{ api: "topHeadlines" }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
   // </Provider>
    
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{ headerShown: false, unmountOnBlur: true }}
          />
          <Tab.Screen
            name="TopHeadlines"
            component={TopHeadlineScreen}
            options={{ headerShown: false, unmountOnBlur: true }}
          />
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
