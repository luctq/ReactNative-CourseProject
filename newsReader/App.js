import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import { store } from "./resources/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "./screens/ListScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from "./components/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function NewsScreen() {
  return (
    //<Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen
        name="News"
        component={ListScreen}
        initialParams={{ api: "news" }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    //</Provider>
  );
}

function TopHeadlineScreen() {
  return (
    //<Provider store={otherStore}>
    <Stack.Navigator>
      <Stack.Screen
        name="TopHeadlines"
        component={ListScreen}
        initialParams={{ api: "topHeadlines" }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    // </Provider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'News') {
              iconName = "home";
            } else if (route.name === 'TopHeadlines') {
              iconName = "flash";
            } else if (route.name === "Search") {
              iconName = "search";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
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
          <Tab.Screen
            name="Search"
            component={Search}
            options={{ unmountOnBlur: true }}
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
