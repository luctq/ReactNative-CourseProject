// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Search from "./components/Search";
// import FlatListFilm from "./components/FlatListFilm";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FlatListFilm />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
//   },
// });
import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmSearch from './screens/filmSearch';
import FilmDescription from './screens/filmDescription';


  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={FilmSearch} />
          <Stack.Screen name="Details" component={FilmDescription} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;