import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./resources/store";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "./components/Search";
import SearchScreen from "./screens/SearchScreen";
import TopTabListScreen from "./screens/TopTabListScreen";
const Tab = createBottomTabNavigator();

function NewsScreen() {
  return (
    //<Provider store={store}>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="News"
    //     component={ListScreen}
    //     initialParams={{ api: "news" }}
    //   />
    //   <Stack.Screen name="Details" component={DetailsScreen} />
    // </Stack.Navigator>
    //</Provider>
    <TopTabListScreen />
    
  );
}

// function TopHeadlineScreen() {
//   return (
//     <Provider store={otherStore}>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="TopHeadlines"
//         component={ListScreen}
//         initialParams={{ api: "topHeadlines" }}
//       />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//     </Provider>
//     <StackListScreen typeScreen="TopHeadlines"/>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // headerTitleStyle: {
            //   fontWeight: 'bold'
            // }, 
            // headerTitleAlign: 'center',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Search") {
                iconName = "search";
              }
              // else if (route.name === 'TopHeadlines') {
              //   iconName = "flash";
              // }

              // You can return any component that you like here!
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
          {/* <Tab.Screen
            name="TopHeadlines"
            component={TopHeadlineScreen}
            options={{ unmountOnBlur: true }}
          /> */}
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
