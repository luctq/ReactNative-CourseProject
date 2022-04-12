
import { StyleSheet, Text, View } from "react-native";
import FlatListFilm from "../components/FlatListFilm";
export default function FilmSearch({navigation}) {
  return (
    <View style={styles.container}>
      <FlatListFilm nav={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
