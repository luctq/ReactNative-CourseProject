import { StyleSheet, Text, View, Image } from "react-native";
export default function FilmDescription({ route, navigation }) {
  const { item } = route.params;
  console.log(item)
  const notPosterFound =
    "https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png";
  return (
    <View style={{ flex:350, flexDirection: 'column'}}>
      <View style={styles.container}>
      <Image
        source={{
          uri: item.Poster != "N/A" ? item.Poster : notPosterFound,
        }}
        style={{ flex: 1, height: 350, width: 200 }}
      />
      <View style={{ flex: 1, marginLeft: 20, marginBottom: 20}}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>{item.Title}</Text>
        <Text>Year: {item.Year}</Text>
        <Text>Rated: {item.Rated}</Text>
        <Text>Released: {item.Released}</Text>
        <Text>Runtime: {item.Runtime}</Text>
        <Text>Genre: {item.Genre}</Text>
        <Text>Director: {item.Director}</Text>
        <Text>Writer: {item.Writer}</Text>
        <Text>Actors: {item.Actors}</Text>
        <Text>Language: {item.Language}</Text>
        <Text>Country: {item.Country}</Text>
      </View>
    </View>
    <Text style={{flex: 6, marginTop: 20}}>Plot: {item.Plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "row",
  },
});
