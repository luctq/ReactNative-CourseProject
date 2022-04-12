import React from "react";
import { TextInput, View, StyleSheet, ViewPage } from "react-native";
export default function Search(props) {
  fetchDataFilm = (textSearch) => {
    fetch(`https://www.omdbapi.com/?s=${textSearch}&apikey=b02776da`)
    .then((response) => response.json())
    .then(filmsList => {
      if (filmsList.Search.length > 1) {
        console.log(filmsList.Search);
        props.setDataFilm(filmsList.Search);
      } else if (filmsList.Search.length == 1) {
        if(filmsList.Search[0].Title != null) {
          props.setDataFilm(filmsList.Search);
        } else {
          props.setDataFilm(null);
        }
      } else {
        props.setDataFilm(null);
      }
    })
    .catch((error) => {
        console.log(error)
    });
  }
  return (
    <View>
      <TextInput style={styles.inputBorder} placeholder="Search name of film" onChangeText={fetchDataFilm}/>
    </View>
  );
}
const styles = StyleSheet.create({
  inputBorder: {
    height: 40,
    marginHorizontal: "1%",
    marginTop: 40,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50
  },
});
