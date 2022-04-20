import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./resources/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "./screens/SearchScreen";
import DrawerListScreen from "./screens/DrawerListScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function NewsScreen() {
  return (
    <DrawerListScreen />
  );
}

function StackSearchScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackSearch"
        component={SearchScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
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

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Search") {
                iconName = "search";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={NewsScreen}
            options={{
              unmountOnBlur: true,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Search"
            component={StackSearchScreen}
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
